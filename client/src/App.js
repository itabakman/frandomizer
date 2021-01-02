import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"

import { useRoutes } from './routes';
import './App.css'
import "materialize-css"
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/navbar';


function App() {
  const {token,login,logout,userId,secretNumber}=useAuth()

  const isAuthenticaded = true//to bool !!token

  
  const routes = useRoutes(isAuthenticaded)
  
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticaded, secretNumber
    }}>
    <Router>
    {isAuthenticaded && <Navbar/>}
    <div className="container">
     {routes} 
    </div>
    </Router>
    </AuthContext.Provider>

    
    
  );
}

export default App
