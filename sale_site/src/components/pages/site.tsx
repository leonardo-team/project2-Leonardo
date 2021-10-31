import {FC} from 'react';
import { EventCard } from '../event-card/event_card';
import './site.css'
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom"
import {Login} from "../pages/login_page"
import {Home} from "../pages/home"

export const Site = ()=>{

  return (
        <>
          
          <div className="Site">
              <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <button id="demo-menu-lower-left" className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">search</i>
                  </button>
                  <span className="mdl-layout-title">Мероприятия в Саратове</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <a className="mdl-navigation__link" href="">
                      <BrowserRouter>
                        <Link href="sale_site\src\components\pages\login_page.tsx" to={'sale_site\src\components\pages\login_page.tsx'}></Link>
                      </BrowserRouter>
                      Войти
                    </a>
                  </nav>
                </div>
              </header>
              <main className="mdl-layout__content">
                <div className="page-content">
                  <div className="mdl-grid">
                      <EventCard eventName="Концерт группы Золотое кольцо" eventDate="21.02.2022" eventSummary="Тут описание события"/>
                      <EventCard eventName="Встреча выпускников" eventDate="20.11.2021" eventSummary="Тут описание события"/>
                      <EventCard eventName="Выставка художников" eventDate="31.11.2021" eventSummary="Тут описание события"/>
                      <EventCard eventName="Марафон РФ 2021" eventSummary="Тут описание события"/>
                      <EventCard eventName="" eventSummary="Тут описание события"/>
                      <EventCard eventName="" eventSummary="Тут описание события"/>
                  </div>
                </div>
              </main>
            </div>
            <footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                  <div className="mdl-logo">
                    Создано командой "Leonardo"
                  </div>
                  <ul className="mdl-mini-footer__link-list">
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Privacy & Terms</a></li>
                  </ul>
                </div>
            </footer>
          </div>

          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="sale_site\src\components\pages\login_page.tsx" component={Login}/>
            </Switch>
          </Router>
            
        </>        
  );
}