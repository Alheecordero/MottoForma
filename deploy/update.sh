#!/usr/bin/env bash
set -euo pipefail

APP_DIR=/var/www/mottoforma
LOCK_FILE=/var/lock/mottoforma-deploy
LOG_FILE=/var/log/mottoforma-deploy.log

exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  exit 0
fi

cd "$APP_DIR"
git fetch --quiet origin main
LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse origin/main)"

if [[ "$LOCAL" == "$REMOTE" ]]; then
  exit 0
fi

{
  echo "---- $(date -Is) deploy $LOCAL -> $REMOTE ----"
  git reset --hard origin/main

  install -m 755 "$APP_DIR/deploy/update.sh" /usr/local/bin/mottoforma-deploy
  install -m 644 "$APP_DIR/deploy/mottoforma.service" /etc/systemd/system/mottoforma.service
  install -m 644 "$APP_DIR/deploy/mottoforma-deploy.service" /etc/systemd/system/mottoforma-deploy.service
  install -m 644 "$APP_DIR/deploy/mottoforma.timer" /etc/systemd/system/mottoforma.timer
  install -m 644 "$APP_DIR/deploy/nginx-mottoforma.conf" /etc/nginx/sites-available/mottoforma
  ln -sfn /etc/nginx/sites-available/mottoforma /etc/nginx/sites-enabled/mottoforma

  nginx -t
  systemctl daemon-reload
  systemctl reload nginx
  systemctl enable --now mottoforma.timer

  cd "$APP_DIR/frontend"
  npm ci
  npm run build
  systemctl enable mottoforma
  systemctl restart mottoforma
  echo "---- $(date -Is) listo $REMOTE ----"
} >>"$LOG_FILE" 2>&1
