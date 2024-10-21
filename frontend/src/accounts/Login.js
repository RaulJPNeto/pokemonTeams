import React, { useState } from 'react';
import { loginUser } from '../service/userService';
const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            console.log('Dados do usuário:', userData); // Exibe os dados que estão sendo enviados

            const result = await loginUser(userData);

            // Verifica se a resposta é o que você espera
            console.log('Resultado do login:', result);

            // Se o token estiver na resposta, armazene no localStorage
            if (result && result.data && result.data.token) {
                localStorage.setItem('authToken', result.data.token);
                console.log('Token armazenado:', localStorage.getItem('authToken'));
                setIsAuthenticated(true);
            } else {
                // Se não houver token, exiba um erro
                console.error('Token não encontrado na resposta:', result);
                setErrorMessage('Erro ao tentar fazer login. Token não recebido.');
            }
        } catch (error) {
            // Exibe o erro específico que ocorreu
            console.error('Erro ao tentar fazer login:', error);
            setErrorMessage('Erro ao tentar fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Login;
