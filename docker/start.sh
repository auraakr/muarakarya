#!/bin/sh
set -e

cd /var/www/html

# Generate nginx config substituting $PORT (Render sets this to 10000)
export PORT=${PORT:-10000}
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Run database migrations
php artisan migrate --force

# Cache config/routes/views for performance
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start nginx + php-fpm via supervisor
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
