FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt .
RUN apt update && apt install -y postgresql-client
RUN pip install --no-cache-dir -r requirements.txt pytest-asyncio

COPY ./app ./app
COPY ./tests ./tests
COPY ./pytest.ini ./pytest.ini
COPY ./wait-for-postgres.sh /wait-for-postgres.sh
COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /wait-for-postgres.sh /entrypoint.sh

ENV PYTHONPATH=/app

CMD ["/entrypoint.sh", "db"]