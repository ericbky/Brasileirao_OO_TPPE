FROM python:3.13-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt pytest-asyncio

COPY ./app ./app
COPY ./tests ./tests
COPY ./pytest.ini ./pytest.ini

ENV PYTHONPATH=/app

CMD ["bash", "-c", "python app/init_db.py && pytest tests/ || true && uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload"]
