import React, { useState } from 'react';
import StyledInput from '../commonStyled/StyledInput';
import StyledLink from '../commonStyled/StyledLink';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../service/userService';
import {
    LoginWrapper,
    LoginBox,
    Title,
    Button,
    ErrorMessage
} from "./Login.styles"

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
                    <StyledInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <StyledInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">Login</Button>
                </form>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <StyledLink>
                    Não tem uma conta? <a href="/register">Registre-se aqui</a>
                </StyledLink>
            </LoginBox>
        </LoginWrapper>
    );
};

export default Login;
