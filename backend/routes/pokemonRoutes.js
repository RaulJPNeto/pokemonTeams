const express = require('express');
const { getPokemonsByRegion } = require('../controllers/pokemonController');

const router = express.Router();
router.get('/region/:region', getPokemonsByRegion);

module.exports = router;