const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: String,
  abilities: [String],
  types: [String],
  region: [String],
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
