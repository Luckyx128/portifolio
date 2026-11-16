#!/bin/sh
# Run on the VPS from the repo checkout: pulls, rebuilds and restarts the container.
# DOMAIN comes from the .env file next to docker-compose.yml.
set -eu
cd "$(dirname "$0")/.."
git pull --ff-only
docker compose up -d --build
docker image prune -f
