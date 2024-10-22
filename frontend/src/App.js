import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Register from './components/accounts/Register';
import Login from './components/accounts/Login';
import Dashboard from './components/Dashboard';
import SelectRegion from './components/pokeTeam/SelectRegion';
import Navbar from './components/nav/Navbar';

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
          {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
          <Routes>
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />}/>
              <Route path="/region" element={<SelectRegion/>} />
              <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
      </Router>
  );
};

export default App;
