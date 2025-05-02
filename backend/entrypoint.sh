#!/bin/bash

set -e

host="$1"
shift

echo "⏳ Aguardando PostgreSQL em $host..."
/wait-for-postgres.sh "$host"

echo "📦 Rodando migrations/init_db.py..."
python app/init_db.py

echo "🧪 Rodando testes com pytest..."
pytest tests/
test_exit_code=$?

if [ $test_exit_code -ne 0 ]; then
  echo "❌ Testes falharam. Abortando inicialização."
  exit $test_exit_code
fi

echo "✅ Testes passaram. Iniciando FastAPI..."
exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload