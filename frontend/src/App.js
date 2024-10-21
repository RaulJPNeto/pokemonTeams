import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Register from './accounts/Register';
import Login from './accounts/Login';
import Dashboard from './accounts/Dashboard';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if(token){
            setIsAuthenticated(true);
        }
    }, []);

  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<Register />} />
              <Route
                  path="/dashboard"
                  element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />}
              />
              <Route path="*" element={<Navigate to="/login" />} /> {/* Rota padrão */}
          </Routes>
      </Router>
  );
};

export default App;
