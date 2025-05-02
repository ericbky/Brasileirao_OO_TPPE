FROM python:3.13-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os requirements primeiro para otimizar cache
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código da aplicação para dentro do container
COPY ./app ./app
COPY ./tests ./tests

CMD ["bash", "-c", "python app/init_db.py && uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload"]