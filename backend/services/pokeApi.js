const axios = require('axios');
const cache = require('./cacheService');

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/';

const fetchWithCache = async (key, url) => {
    const cachedData = cache.get(key);
    if (cachedData) {
        console.log(`Cache hit for ${key}`);
        return cachedData;
    }

    try {
        const response = await axios.get(url);
        const data = response.data;
        cache.set(key, data);
        console.log(`Cache set for ${key}`);
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = { fetchWithCache, POKE_API_BASE_URL };