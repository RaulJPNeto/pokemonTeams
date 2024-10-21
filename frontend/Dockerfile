# Usando a imagem oficial do Node.js
FROM node:20-alpine AS development

# Criando diretório de trabalho dentro do container
WORKDIR /app

# Copiando package.json e instalando dependências
COPY package*.json ./
RUN npm install

# Copiando todo o código do app
COPY . .

# Expondo a porta padrão do React (3000)
EXPOSE 3000

# Rodando a aplicação em modo de desenvolvimento (npm start)
CMD ["npm", "start"]
