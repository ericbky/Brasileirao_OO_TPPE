FROM python:3.11-slim

WORKDIR /app

COPY ./brasileirao_projeto ./brasileirao_projeto
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "brasileirao_projeto.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]