const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
