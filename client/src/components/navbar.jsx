import React, { useContext } from 'react';

import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

import kosti from './../images/kosti.png'

   

export const Navbar = () => {

    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler =event=>{
    
    event.preventDefault()
    auth.logout()
    history.push('/')
    
    
    }




    return (
        <nav>
  <div class="nav-wrapper ">
   <a href="/" className="logoName">RANDOMIZER<img src={kosti} width='50px' height='50px'></img></a>
    <ul id="nav-mobile" class="right">
      {/* <li><NavLink to="/random">Крутить</NavLink></li>
      <li><NavLink to="/settings">Настройки</NavLink></li>
      <li><a href="/" onClick={logoutHandler}>Выход</a></li> */}
    </ul>
  </div>
</nav>
      
    );
};
