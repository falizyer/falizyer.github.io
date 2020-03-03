import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import logo from "assets/logo.svg";

import { ROUTES } from "./App.constant";

import NotFound from "./common/NotFound";
import AppNavigation from "./common/AppNavigation";

import "./App.scss";

function App() {
  return (
    <>
      <header className="app-header">
        <AppNavigation />
      </header>
      <Suspense fallback={ (<div>loading...</div>) }>
        <Switch>
          <Route
            path={ ROUTES.About.path }
            component={ ROUTES.About.component }
            exact={ ROUTES.About.exact }
          />
          <Route
            path={ ROUTES.Contacts.path }
            component={ ROUTES.Contacts.component }
            exact={ ROUTES.Contacts.exact }
          />

          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Suspense>

      <Route render={ () => (<Redirect to={ ROUTES.About.path }/>) } />
    </>
  );
}

export default App;
