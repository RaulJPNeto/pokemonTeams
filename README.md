# Projeto Pokémon Teams

## Descrição

O projeto **Pokémon Teams** é uma aplicação web que permite aos usuários registrar-se, fazer login e criar equipes de Pokémon. O sistema utiliza tecnologias modernas como React para o front-end e Node.js com MongoDB para o back-end, além de implementar autenticação via JSON Web Token (JWT) e segurança através de HTTPS.

## Tecnologias Utilizadas

- **Front-end:** React, Axios
- **Back-end:** Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken
- **Outros:** Docker, Nginx, Certbot (para SSL)

## Funcionalidades

- Registro de usuário
- Login de usuário com autenticação JWT
- Criação e gerenciamento de equipes de Pokémon
- Implementação de HTTPS com certificados SSL

## Estrutura do Projeto


## Configuração do Ambiente

### Configuração do Back-end

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu_usuario/pokemon-teams.git
   cd pokemon-teams/backend
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Crie um arquivo .env na raiz do diretório backend e adicione as seguintes variáveis de ambiente:
    ```bash
    PORT=3000
    JWT_SECRET=sua_chave_secreta
    MONGODB_URI=mongodb://localhost:27017/poketeams_db
    ```
4. Para iniciar o servidor localmente, execute:
    ```bash
    npm run dev
    ```
### Configuração do Front-end

1. Navegue até o diretório do front-end:
    ```bash
   npm install
   ```
## Docker
Para rodar o projeto com Docker, siga os passos abaixo:
1. Navegue até o diretório do projeto.
2. Execute o seguinte comando para construir as imagens:
    ```bash
    docker-compose up --build
    ```
## SSL
O projeto utiliza certificados SSL gerados localmente. Para produção, considere usar Certbot e um domínio real para obter certificados válidos.

## Contribuição
Se você gostaria de contribuir com o projeto, fique à vontade para abrir um Pull Request ou reportar problemas.

## Licença
Este projeto está licenciado sob a MIT License.

### Considerações
- Assim como antes, não se esqueça de substituir `seu_usuario` pelo seu nome de usuário ou o caminho correto do repositório no GitHub.
- Você pode adicionar mais informações ou seções conforme necessário.