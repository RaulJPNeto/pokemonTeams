import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/accounts/Register';
import Login from './components/accounts/Login';
import Dashboard from './components/Dashboard';
import SelectRegion from './components/pokeTeam/SelectRegion';
import SelectPokemon from './components/pokeTeam/SelectPokemon';
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
              <Route path="/select-pokemon/:regionName" element={<SelectPokemon/>} />
              <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
      </Router>
  );
};

export default App;
