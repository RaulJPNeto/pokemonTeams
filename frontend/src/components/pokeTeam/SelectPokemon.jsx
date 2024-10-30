import styled from "styled-components";
import {useParams} from "react-router-dom";
import CardPokemon from "./CardPokemon";
import {pokemonsByRegions} from "../../service/pokeApiService";
import {useEffect, useState} from "react";

const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    max-width: 90%; 
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    z-index: 1000; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999; 
`;

const PokemonListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`;


const PopupHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.25rem;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    margin-left: 0.5rem;

    &:hover {
        color: #999;
    }
`;

const PokemonImage = styled.img`
    width: 50%;
    max-width: 200px;
    margin: 0 auto;
    display: block
`;

const SelectPokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(null);
    const {regionName} = useParams();
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isPopUpOpen, setisPopUpOpen] = useState(false);

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

    const handleCardClick = (pokemonDetails) => {
        setSelectedPokemon(pokemonDetails);
        setisPopUpOpen(true);
    }

    const handleClosePopup = () => {
        setisPopUpOpen(false);
        setSelectedPokemon(null);
    }

    if (error) return <div>Erro ao carregar pokémons</div>;
    if (!pokemons) return <div>Carregando...</div>;
    return (
        <PokemonListWrapper>
            {pokemons.map((pokemon) => (
                <CardPokemon
                    key={pokemon.pokemon_species.name}
                    pokemonName={pokemon.pokemon_species.name}
                    onClick={handleCardClick}
                />
            ))}


            {isPopUpOpen && (
                <>
                    <Overlay onClick={handleClosePopup}/>
                    <Popup>
                        <PopupHeader>
                            <Title>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</Title>
                            <CloseButton onClick={handleClosePopup}>&times;</CloseButton>
                        </PopupHeader>
                        {selectedPokemon && selectedPokemon.sprites ? (
                            <PokemonImage src={selectedPokemon.sprites.other.showdown.front_default} alt={selectedPokemon.name}/>
                        ) : (
                            <p>Imagem não disponível</p>
                        )}
                        {/* Adicione mais detalhes do Pokémon aqui */}
                    </Popup>
                </>
            )}
        </PokemonListWrapper>
    );
}

export default SelectPokemon;
