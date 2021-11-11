import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Home } from './home/home';
import { Login } from './login/login';
import { RegisterForm } from './registration/registration';
import '../components/css/site.css'
import { DetailEvents } from './detail_events/detail_events';
import { LoginHome } from './login_home/login_home';

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => 
        <div className="Main">
            <Header login="Войти" path="/login.tsx"/>
            <Home />
            <Footer />
        </div>
    },
    {
      path: "/login.tsx",
      sidebar: () =>
      <div className="Main">
            <Header login="Зарегистрироваться" path="/registration.tsx"/>
            <LoginForm path="/login_home.tsx"/>
            <Footer />
        </div>
    },
    {
      path: "/registration.tsx",
      sidebar: () =>
      <div className="Main">
            <Header login="На главную" path="/"/>
            <RegisterForm />
            <Footer />
        </div>
    },
    {
      path: "/login_home.tsx",
      sidebar: () =>
      <div className="Main">
            <Header login="Паша" path="/"/>
            <LoginHome />
            <Footer />
        </div>
    },      
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
  