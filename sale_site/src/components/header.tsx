import './site.css'




export const Header = ()=>{

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
                    <a className="mdl-navigation__link" href="/login_page.tsx" onClick={()=>{console.log("click")}}>
                      Войти
                    </a>
                  </nav>
                </div>
              </header>
            </div>
          </div> 

  );
}