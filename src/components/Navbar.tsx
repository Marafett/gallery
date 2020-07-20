import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper blue darken-3">
          <div className="brand-logo center">Gallery</div>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink activeClassName="active" to="/" exact>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/favorites">
                Избранное
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
