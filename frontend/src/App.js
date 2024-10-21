import React, {useEffect, useState} from 'react';
import Register from './accounts/Register';
import Login from './accounts/Login';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if(token){
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

  return (
      <div>
          {isAuthenticated ? (
              <div>
                  <h2>Bem-vindo! Você está logado.</h2>
                  <button onClick={handleLogout}>Logout</button>
              </div>
          ) : (
              <div>
                  {isRegistering ? (
                      <Register/>
                  ) : (
                      <Login setIsAuthenticated={setIsAuthenticated}/>
                  )}
                  <p>
                      {isRegistering
                          ? "Já tem uma conta? "
                          : "Não tem uma conta? "}
                      <button onClick={() => setIsRegistering(!isRegistering)}>
                          {isRegistering ? "Fazer login" : "Registre-se aqui"}
                      </button>
                  </p>
              </div>
          )}
      </div>
  );
};

export default App;
