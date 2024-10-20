# Usando imagem oficial do Node.js
FROM node:20-alpine

# Criando o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o package.json e instalando as dependências
COPY package*.json ./
RUN npm install

# Copiando o código da aplicação
COPY . .

# Expondo a porta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
