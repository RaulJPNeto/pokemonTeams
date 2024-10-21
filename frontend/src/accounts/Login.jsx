import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../service/userService';
import styled from "styled-components";

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f7f7f7;
`;

const LoginBox = styled.div`
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
`;

const Title = styled.h2`
    color: #3b4cca;
    margin-bottom: 1.5rem;
`;

const Input = styled.input`
    width: 100%;
    max-width: 400px; // Definindo uma largura máxima
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box; // Garante que padding e border sejam incluídos na largura total
`;

const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    background-color: #3b4cca;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #2f399d;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
`;
const LinkStyled = styled.p`
    display: block;
    margin-top: 1rem;
    color: #3b4cca;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            const result = await loginUser(userData);
            if (result && result.data && result.data.token) {
                localStorage.setItem('authToken', result.data.token);
                setIsAuthenticated(true);
                navigate('/dashboard');
            } else {
                setErrorMessage('Erro ao tentar fazer login. Token não recebido.');
            }
        } catch (error) {
            setErrorMessage('Erro ao tentar fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <LoginWrapper>
            <LoginBox>
                <Title>Login</Title>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">Login</Button>
                </form>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <LinkStyled>
                    Não tem uma conta? <a href="/register">Registre-se aqui</a>
                </LinkStyled>
            </LoginBox>
        </LoginWrapper>
    );
};

export default Login;
