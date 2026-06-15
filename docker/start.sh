#!/bin/sh
set -e

cd /var/www/html

# Generate nginx config — PORT is injected by Railway at runtime
: "${PORT:?PORT env var is required}"
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Run database migrations
php artisan migrate --force

# Cache config/routes/views for performance
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start nginx + php-fpm via supervisor
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
