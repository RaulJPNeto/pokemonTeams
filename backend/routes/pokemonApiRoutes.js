const express = require('express');
const router = express.Router();
const { getPokemonByRegion, getPokemonDetails, getRegions} = require('../controllers/pokeApiController');

console.log("pokemonApiRoutes loaded");

router.get('/regions', getRegions);
router.get('/:region/pokemons', getPokemonByRegion);
router.get('/pokemon/:name', getPokemonDetails);

module.exports = router;