import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "App.constant";

import "./AppNavigation.scss";

function AppNavigation() {
  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        <li className="app-navigation__list__item"><Link to={ ROUTES.About.path }>About</Link></li>
        <li className="app-navigation__list__item"><Link to={ ROUTES.Contacts.path }>Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default AppNavigation;
