const mongoose = require('mongoose');

const teamPokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon' }],
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('TeamPokemon', teamPokemonSchema);
