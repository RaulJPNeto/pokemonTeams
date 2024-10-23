import { useState, useEffect } from 'react';
import useSWR from "swr";
import styled from "styled-components";
import { getPokemonsByRegion } from '../../api/pokemons';
import {useParams} from "react-router-dom";

const PokemonListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

const PokemonCard = styled.div`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 150px;
    text-align: center;
`;

const fetchPokemons = async (regionName) => {
    try {
        const regionResponse = await getPokemonsByRegion(`https://pokeapi.co/api/v2/region/${regionName}`);
        const pokedexUrl = regionResponse.pokedexes[0].url;

        const pokedex = await getPokemonsByRegion(pokedexUrl);
        return pokedex.pokemon_entries;
    } catch (error) {
        console.log('Error in fetchPokemons:', error);
        throw error;
    }
};

const SelectPokemon = () => {
    const {regionName} = useParams();
    const { data: pokemons, error } = useSWR(regionName, fetchPokemons)

    if (error) return <div>Erro ao carregar pokémons</div>;
    if (!pokemons) return <div>Carregando...</div>;

    return (
        <PokemonListWrapper>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.entry_number}>
                    {pokemon.pokemon_species.name.charAt(0).toUpperCase() + pokemon.pokemon_species.name.slice(1)}
                </PokemonCard>
            ))}
        </PokemonListWrapper>
    );
}

export default SelectPokemon ;
