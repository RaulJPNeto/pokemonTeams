const axios = require('axios');

const getPokemonsByRegion = async (req, res) => {
  const { region } = req.params;

  try {
    // Fazer a chamada para a API da região
    const regionUrl = `https://pokeapi.co/api/v2/pokedex/${region}`;
    const response = await axios.get(regionUrl);

    const pokemons = response.data.pokemon_entries.map((entry) => ({
      name: entry.pokemon_species.name,
    }));

    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Pokémon for the selected region' });
  }
};

module.exports = { getPokemonsByRegion };
