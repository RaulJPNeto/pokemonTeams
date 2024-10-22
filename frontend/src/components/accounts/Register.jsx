import React, { useState } from "react";
import StyledInput from '../commonStyled/StyledInput';
import StyledLink from '../commonStyled/StyledLink';
import { registerUser } from '../../service/userService';
import { useNavigate } from "react-router-dom";
import {
    RegisterWrapper,
    RegisterBox,
    Title,
    Button,
    ErrorMessage,
    SuccessMessage,
    LinkStyled
} from "./Register.styles"



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
                    <StyledInput
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <Button type="submit">Registrar</Button>
                </form>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
                <StyledLink>
                    Já tem uma conta? <a href="/login">Faça login</a>
                </StyledLink>
            </RegisterBox>
        </RegisterWrapper>
    )
};

export default Register;