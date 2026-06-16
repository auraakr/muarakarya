#!/bin/sh

cd /var/www/html

if [ -z "$PORT" ]; then
    echo "[start] ERROR: PORT env var is not set"
    exit 1
fi

echo "[start] Configuring nginx on port $PORT"
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

echo "[start] Caching config and routes"
php artisan config:cache || echo "[start] config:cache failed, skipping"
php artisan route:cache  || echo "[start] route:cache failed, skipping"

echo "[start] Starting nginx + php-fpm"
/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf &
SUPERPID=$!

echo "[start] Waiting for php-fpm to be ready"
sleep 3

echo "[start] Running migrations"
php artisan migrate --force || echo "[start] WARNING: migration failed"

echo "[start] Caching views"
php artisan view:cache || echo "[start] view:cache failed, skipping"

echo "[start] App ready on port $PORT"
wait $SUPERPID
