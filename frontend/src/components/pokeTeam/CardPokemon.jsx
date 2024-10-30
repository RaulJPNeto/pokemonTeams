import styled from "styled-components";
import {getPokemonDetails} from "../../service/pokeApiService";
import {useEffect, useState} from "react";


const PokemonCard = styled.div`
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 150px;
    text-align: center;
`;

const CardPokemon = ({pokemonName, onClick}) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPokemonDetails = async () => {
            try{
                const response = await getPokemonDetails(pokemonName);
                setPokemonDetails(response)
            } catch (error){
                setError(error);
            }
        }
        loadPokemonDetails()
    }, [pokemonName]);


    if(error) return <PokemonCard><h3>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h3>Erro ao carregar Imagem</PokemonCard>;
    if(!pokemonDetails) return <div>Carregando</div>;

    return (
        <div>
            {pokemonDetails ? (
                <PokemonCard onClick={() => onClick(pokemonDetails)}>
                    <h3>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h3>
                    {pokemonDetails.sprites.front_default ? (
                        <img
                            src={pokemonDetails.sprites.front_default}
                            alt={pokemonName}
                        />
                    ) : (
                        <p>Imagem não disponível</p>
                    )}
                </PokemonCard>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default CardPokemon;