import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './site.css'

export type HeaderProps ={
    login?: string
}


export const Header:FC <HeaderProps> = ({login = "Войти"})=>{

  console.log('Header')
  let [authorization, setAuthorization]  = useState(true)

  const loginAuthorization = authorization ? `${login}`: 'регистрация'

  const clickHandle = ()=>{console.log("click"); setAuthorization(false)}

  // useEffect(() => {
  //   document.title = "Страница регистрации и входа";
  // });
              
  return (

          <div className="Header">
            {
                login &&
                (<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <button id="demo-menu-lower-left" className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">search</i>
                  </button>
                  <span className="mdl-layout-title">Мероприятия в Саратове</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <Link className="mdl-navigation__link" to={'/login.tsx'} onClick={clickHandle}>
                      {loginAuthorization}
                    </Link>
                  </nav>
                </div>
              </header>
            </div>)
          }
          </div> 

  );
}