FROM php:8.3-fpm-alpine

# System packages
RUN apk add --no-cache \
    nginx \
    supervisor \
    nodejs \
    npm \
    libpq-dev \
    libzip-dev \
    libpng-dev \
    oniguruma-dev \
    gettext \
    && docker-php-ext-install \
        pdo \
        pdo_pgsql \
        zip \
        bcmath \
        mbstring \
        gd \
        opcache \
        pcntl

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy source
COPY . .

# Create .env first so artisan works during composer post-install scripts
RUN cp .env.example .env

# Install PHP dependencies (post-autoload-dump runs artisan package:discover)
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress

# Generate APP_KEY
RUN php artisan key:generate --force

# Generate Wayfinder TypeScript route types
RUN php artisan wayfinder:generate

# Build frontend assets
RUN npm ci && npm run build && rm -rf node_modules

# Set permissions
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Copy runtime config files
COPY docker/nginx.conf.template /etc/nginx/nginx.conf.template
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

ARG PORT=8080
EXPOSE $PORT

CMD ["/start.sh"]
