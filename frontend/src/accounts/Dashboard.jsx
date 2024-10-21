import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
`;

const WelcomeMessage = styled.h1`
    color: #ffcb05;
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const InfoMessage = styled.p`
    font-size: 1.2rem;
    color: #3b4cca;
`;

const Button = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #3b4cca;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 2rem;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #2f399d;
    }
`;

const Dashboard = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/login'); // Redireciona para a tela de login após o logout
    };

    return (
        <DashboardWrapper>
        <WelcomeMessage>Bem-vindo ao Dashboard!</WelcomeMessage>
        <InfoMessage>Você está autenticado no sistema Pokémon.</InfoMessage>
        <Button onClick={handleLogout}>Logout</Button>
        </DashboardWrapper>
    );
};

export default Dashboard;
