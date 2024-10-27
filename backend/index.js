const express = require('express');
const { connectDB } = require('./config/db');
const userRouts = require('./routes/userRoutes');
const pokemonRouts = require('./routes/pokemonRoutes');
const pokemonApiRouts = require('./routes/pokemonApiRoutes');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const { initializeData } = require('./controllers/pokeApiController')

const app = express();
const PORT = process.env.PORT;

connectDB();
initializeData();

const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH),
}

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouts);
app.use('/api/pokemons', pokemonRouts);
app.use('/api/apiPokemons/', pokemonApiRouts);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
