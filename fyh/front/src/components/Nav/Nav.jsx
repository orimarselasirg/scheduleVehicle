import React from "react";
import { NavLink} from "react-router-dom";
import './nav.css'

function Nav(props) {
  return (
    <div className="navbar is-white">
      <div className="navbar-item logo">
          {/* <span className="navbar-brand logo"/> */}

      </div>
      <NavLink to ='/home'  className="navbar-item">
        <span>Home</span>
      </NavLink>
      <NavLink to = '/register' className="navbar-item">
        <span>Registrar Cliente</span>
      </NavLink>
      <NavLink to = '/pits' className="navbar-item">
        <span >On Pits</span>
      </NavLink>
    </div>
  );
}

export default Nav;
