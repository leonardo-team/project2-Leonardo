import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/site.css'

export type HeaderProps ={
    login?: string,
    path?:string
}


export const Header:FC <HeaderProps> = ({login = "Войти", path})=>{

  return (

          <div className="Header">

                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <button id="demo-menu-lower-left" className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">search</i>
                  </button>
                  <span className="mdl-layout-title">Мероприятия в Саратове</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <a className="mdl-navigation__link">
                      <Link className="mdl-navigation__link" to={`${path}`}>
                        {login}
                      </Link>
                    </a>
                  </nav>
                </div>
              </header>
            </div>
          </div> 

  );
}