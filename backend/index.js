const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Carregar variáveis de ambiente

const app = express();
const port = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conectado ao MongoDB');
        // Iniciar o servidor apenas se a conexão for bem-sucedida
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB', err);
    });
