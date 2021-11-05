import '../css/site.css'


export function Registration(){
  return (
    <div className="Registration">
        <div className="Login_page">

        </div>
        <div className="Registration Login_page">
            <label htmlFor="">Логин</label>
            <input className="Login_page-login" type="text" />
            <label htmlFor="">Придумайте пароль</label>
            <input className="Login_page-password" type="password" />
            <label htmlFor="">Введите пароль еще раз</label>
            <input className="Login_page-password" type="password" />
        </div>
        <div className="button">
            <button className="mdl-button mdl-js-button mdl-button--raised">
                Зарегистрироваться
            </button>
        </div>
    </div>
  )
}