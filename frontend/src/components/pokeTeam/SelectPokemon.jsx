import styled from "styled-components";
import {useParams} from "react-router-dom";
import CardPokemon from "./CardPokemon";
import {pokemonsByRegions} from "../../service/pokeApiService";
import {useEffect, useState} from "react";


const PokemonListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`;

const SelectPokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);
    const {regionName} = useParams();

    useEffect(() => {
        const loadPokemonsByRegions = async () => {
            try {
                const response = await pokemonsByRegions(regionName);
                setPokemons(response);
            } catch (error) {
                setError(error);
            }
        };

        loadPokemonsByRegions();
    }, [regionName]);

    if (error) return <div>Erro ao carregar pokémons</div>;
    if (!pokemons) return <div>Carregando...</div>;

    return (
        <PokemonListWrapper>
            {pokemons.map((pokemon) => (
                <CardPokemon key={pokemon.pokemon_species.name} pokemonName={pokemon.pokemon_species.name} />
            ))}
        </PokemonListWrapper>
    );
}

export default SelectPokemon ;
