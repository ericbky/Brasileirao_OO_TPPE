FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt .
RUN apt update && apt install -y postgresql-client
RUN pip install --no-cache-dir -r requirements.txt pytest-asyncio ruff black

COPY ./app ./app
COPY ./tests ./tests
COPY ./pytest.ini ./pytest.ini
COPY ./wait-for-postgres.sh /wait-for-postgres.sh
COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /wait-for-postgres.sh /entrypoint.sh

# Executa Ruff e Black no build
RUN ruff check ./app && ruff check ./tests
RUN black --check ./app && black --check ./tests

ENV PYTHONPATH=/app

CMD ["/entrypoint.sh", "db"]