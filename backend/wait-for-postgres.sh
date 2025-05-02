#!/bin/bash

set -e

host="$1"
shift
cmd="$@"

PGUSER="${POSTGRES_USER:-postgres}"
PGPASS="${POSTGRES_PASSWORD:-postgres}"

until PGPASSWORD=$PGPASS psql -h "$host" -U "$PGUSER" -c '\q' > /dev/null 2>&1; do
  echo "⏳ Aguardando PostgreSQL em $host..."
  sleep 2
done

echo "✅ PostgreSQL está pronto em $host"
exec $cmd