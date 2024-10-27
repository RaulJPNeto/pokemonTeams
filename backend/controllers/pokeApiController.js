const { fetchWithCache, POKE_API_BASE_URL } = require('../services/pokeApi');

const getRegions = async (req, res) => {
    try {
        const regionsData = await fetchWithCache('regions', `${POKE_API_BASE_URL}region/`);

        if (!regionsData) {
            console.warn("No regions found in response.");
            return res.status(404).json({ error: 'No regions found' });
        }

        console.log("Regions data fetched successfully.");
        return res.status(200).json(regionsData);
    } catch (error) {
        console.error('Error fetching regions:', error.message);
        return res.status(500).json({ error: 'Error fetching regions' });
    }
};

const getPokemonByRegion = async (req, res) => {
    const regionName = req.params.region;
    const regionUrl = `${POKE_API_BASE_URL}region/${regionName}`;

    try {
        console.log(`Fetching data for region: ${regionName}`);
        const regionData = await fetchWithCache(`region-${regionName}`, regionUrl);
        console.log(`Region data for ${regionName} retrieved:`, regionData);

        const pokedexUrl = regionData.pokedexes[0].url;
        console.log(`Fetching pokedex for region ${regionName} at URL: ${pokedexUrl}`);

        const pokedexData = await fetchWithCache(`pokedex-${regionName}`, pokedexUrl);
        console.log(`Pokedex data for region ${regionName} retrieved successfully.`);

        res.json(pokedexData.pokemon_entries);
    } catch (error) {
        console.error(`Error fetching pokémons for region ${regionName}:`, error.message);
        res.status(500).json({ error: 'Erro ao buscar pokémons da região.' });
    }
};

const getPokemonDetails = async (req, res) => {
    const pokemonName = req.params.name;
    const pokemonUrl = `${POKE_API_BASE_URL}pokemon/${pokemonName}`;
    try {
        console.log(`Fetching details for Pokémon: ${pokemonName}`);
        const pokemon = await fetchWithCache(`pokedex-${pokemonName}`, pokemonUrl);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pokémons da região.' });
    }
};

const initializeData = async () => {
    try {
        const regions = await getRegions();
        console.log('Regions: ',regions);
        for (const region of regions) {
           const regionName = region.result.name;
           const pokemons = await getPokemonByRegion(regionName);
           for (const pokemon of pokemons) {
               await getPokemonDetails(pokemon);
           }
        }
        console.log('FIM da busca');
    } catch (error) {
        console.log('Erro ao inicializar dados:', error.message)
    }
};


module.exports = {
    initializeData,
    getPokemonByRegion,
    getPokemonDetails,
    getRegions
}
