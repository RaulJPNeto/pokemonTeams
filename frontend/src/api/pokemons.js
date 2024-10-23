export const getPokemonsByRegion = async (region) => {
    try {
        const response = await fetch(region);
        return response.json();
    } catch (error) {
        console.log('Error in getRegions', error);
        throw error;
    }
}

export const getPokemonDetails = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log('Error fetching Pokémon details', error);
        throw error;
    }
};