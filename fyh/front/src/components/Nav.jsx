import React from "react";
import { NavLink} from "react-router-dom";

function Nav(props) {
  return (
    <div className="navbar is-dark">
        <div className="navbar-brand">

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
