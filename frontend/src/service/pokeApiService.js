import axios from 'axios';

const POKE_API_URL = 'http://localhost:3000/api/apiPokemons'

export const pokemonRegions = async () => {
    try {
        const response = await axios.get(`${POKE_API_URL}/regions`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Erro ao buscar regiões');
    }
}

export const pokemonsByRegions = async (regionName) => {
    try {
        const response = await axios.get(`${POKE_API_URL}/${regionName}/pokemons`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Erro ao buscar regiões');
    }
}


export const getPokemonDetails = async (pokemonName) => {
    try {
        const response = await axios.get(`${POKE_API_URL}/pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Erro ao buscar regiões');
    }
}