# Imagem base Node
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas o package.json primeiro
COPY package.json ./

# Instala dependências com base no lockfile (reproducível e rápido)
RUN npm install --legacy-peer-deps

# Copia o restante do projeto
COPY . .

# Expõe a porta (opcional, mas útil para debug e docker-compose)
EXPOSE 3000

# Comando padrão para iniciar o app
CMD ["npm", "start"]
