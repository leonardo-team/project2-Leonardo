import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { MoreDetails } from '../MoreDetails/MoreDetails';
import { LoginHome } from '../LoginHome/LoginHome';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions';
import { selectStatistic, selectEventList } from '../../store/selectors/selectors';
import '../components/css/site.css'

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
  