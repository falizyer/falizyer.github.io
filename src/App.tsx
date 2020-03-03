import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from 'assets/logo.svg';

import { ROUTES } from "./App.constant";
import NotFound from "./common/NotFound";

import './App.scss';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={ logo } className="app-logo" alt="logo"/>

      </header>
      <section>
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
      </section>
    </>
  );
}

export default App;
