import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "App.constant";

import useTranslation from "hooks/UseTranslation";

import "./AppNavigation.scss";

function AppNavigation() {
  const { t } = useTranslation();

  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        <li className="app-navigation__list__item">
          <Link to={ ROUTES.About.path }>
            { t("app.navigation.about") }
          </Link>
        </li>
        <li className="app-navigation__list__item">
          <Link to={ ROUTES.Contacts.path }>
            { t("app.navigation.contacts") }
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppNavigation;
