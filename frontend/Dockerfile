# Usando a imagem oficial do Node.js
FROM node:20-alpine AS build

# Criando diretório de trabalho dentro do container
WORKDIR /app

# Copiando package.json e instalando dependências
COPY package*.json ./
RUN npm install

# Copiando todo o código do app
COPY . .

# Build da aplicação
RUN npm run build

# Usando um servidor Nginx para servir o app
FROM nginx:alpine

# Copia os arquivos da pasta build para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expondo a porta 80
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
