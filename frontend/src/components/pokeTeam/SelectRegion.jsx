import React, {useState} from 'react';
import useSWR from "swr";
import { getRegions } from "../../api/regions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectRegionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
`;

const Title = styled.h2`
    color: #3b4cca;
    margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
`;

const Button = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #3b4cca;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0.5rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2f399d;
    }
`;

const SelectRegion = () => {
    const { data: regions, error } = useSWR('/regions', getRegions);
    console.log(regions);
    const navigate = useNavigate();

    const handleSelectRegion = (region) => {
        navigate(`/select-pokemon/${region.name}`);
    };

    if(error) return <div>Erro ao carregar regiões</div>;
    if (!regions || !regions.results) return <div>Carregando</div>;

    return (
        <SelectRegionWrapper>
            <Title>Selecione uma Região</Title>
            <ButtonContainer>
                {regions.results.map(region => (
                    <Button
                        key={region.name}
                        onClick={() => handleSelectRegion(region)} >
                        {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
                    </Button>
                ))}
            </ButtonContainer>
        </SelectRegionWrapper>
    );
}

export default SelectRegion;