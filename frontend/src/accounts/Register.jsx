import React, { useState } from "react";
import { registerUser } from '../service/userService';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegisterWrapper =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f7f7f7;
`;

const RegisterBox = styled.div`
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
`;

const Title = styled.h2`
    color: #ffcb05; // Diferenciar a cor do título
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
    box-sizing: border-box; 
`;

const Button  = styled.button`
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

const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
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


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { name, email, password };
        try {
            const result = await registerUser(userData);
            setSuccessMessage("Cadastro realizado com sucesso! Redirecionando...");
            setErrorMessage("");
            setTimeout(() => {
                navigate("/login"); // Redireciona para o login após 2 segundos
            }, 3000);
        } catch (error) {
            setErrorMessage("Erro ao tentar cadastrar. Verifique os dados.");
            setSuccessMessage('');
        }
    };

    return (
        <RegisterWrapper>
            <RegisterBox>
                <Title>Register</Title>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <Button type="submit">Registrar</Button>
                </form>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
                <LinkStyled>
                    Já tem uma conta? <a href="/login">Faça login</a>
                </LinkStyled>
            </RegisterBox>
        </RegisterWrapper>
    )
};

export default Register;