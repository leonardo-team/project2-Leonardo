import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import '../css/site.css'
import { HomePage } from '../../page/HomePage';
import { LoginPage } from '../../page/LoginPage';
import { RegisterPage } from '../../page/RegisterPage';

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => 
        <HomePage
          path={'/LoginPage.tsx'}
        />
    },
    {
      path: "/LoginPage.tsx",
      sidebar: () => 
        <LoginPage
          path={'/RegisterPage.tsx'}
        />
    },
    {
      path: "/RegisterPage.tsx",
      sidebar: () => 
        <RegisterPage
          path={'/'}
        />
    }
  ];

  export default function Routing() {
    return (
      <Router>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch> 
      </Router>
    );
  }
  