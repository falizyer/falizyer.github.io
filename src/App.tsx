import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./App.constant";

import ProxyRoute from "./common/ProxyRoute";

import NotFound from "./common/NotFound";
import AppNavigation from "./common/AppNavigation";
import ProxyRedirect from "./common/ProxyRedirect";
import Header from "./common/Header";
import LanguageSwitcher from "./common/LanguageSwitcher";

import "./App.scss";

function App() {
  return (
    <>
      <Header>
        <Suspense fallback={ (<div>loading...</div>) }>
          <AppNavigation/>
          <LanguageSwitcher/>
        </Suspense>
      </Header>
      <Suspense fallback={ (<div>loading...</div>) }>
        <Switch>
          <ProxyRoute
            path={ ROUTES.About.path }
            component={ ROUTES.About.component }
            exact={ ROUTES.About.exact }
          />
          <ProxyRoute
            path={ ROUTES.Contacts.path }
            component={ ROUTES.Contacts.component }
            exact={ ROUTES.Contacts.exact }
          />

          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Suspense>

      <Route render={ () => (<ProxyRedirect to={ ROUTES.About.path }/>) }/>
    </>
  );
}

export default App;
