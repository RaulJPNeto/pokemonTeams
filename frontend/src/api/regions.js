const BASE_URL = 'https://pokeapi.co/api/v2';

export const getRegions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/region`);
        return response.json();
    } catch (error) {
        console.log('Error in getRegions', error);
        throw error;
    }
};