import {FC} from 'react';
import './site.css'


export function Login(){
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
        <button className="mdl-button mdl-js-button mdl-button--raised">
            Войти
        </button>
    </div>
  )
}