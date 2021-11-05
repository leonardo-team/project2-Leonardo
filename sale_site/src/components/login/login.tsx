
import { FC } from 'react'
import { Link } from 'react-router-dom'
import '../css/site.css'

export type LoginProps = {
  path?:string
}

export const Login:FC <LoginProps>=({path})=>{
  return (
    <div className="Login">

        <div className="Login_page">

        </div>

          <div className="Login_page">
            <label htmlFor="">Логин</label>
              <input className="Login_page-login" type="text" />
            <label htmlFor="">Пароль</label>
              <input className="Login_page-password" type="password" />
          </div>
          <div className="button">
            <button className="mdl-button mdl-js-button mdl-button--raised">
              <a>
                <Link to={`${path}`}></Link>
              </a>
                Войти
            </button>
          </div>

        
    </div>
  )
}