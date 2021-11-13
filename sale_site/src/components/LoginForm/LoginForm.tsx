import React, { FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "../css/site.css";

export type LoginProps = {
  path?: string;
};

const EMPTY_FORM = {
  login: "",
  password: "",
};

export const LoginForm: FC<LoginProps> = ({ path }) => {
  const [form, setForm] = useState(EMPTY_FORM);

  const loginChandeHandle = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      login: e.target.value,
    }));
  }, []);
  const passwordChandeHandle = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  }, []);
  const formSubmitHandle = useCallback((e) => {
    e.preventDefault();
    console.log (form)
  }, [form]);

  return (
    <form onSubmit={formSubmitHandle} className="LoginForm">
      <div className="Login">
        <div className="Login_page"></div>
        <div className="Login_page">
          <label htmlFor="">Логин</label>
          <input
            id="login"
            name="login"
            value={form.login}
            onChange={loginChandeHandle}
            className="Login_page-login"
            type="text"
          />
          <label htmlFor="">Пароль</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={passwordChandeHandle}
            className="Login_page-password"
            type="password"
          />
        </div>
        <div className="button">
          <button
            type='submit'
            className="mdl-button mdl-js-button mdl-button--raised"
          >
            <a>
              <Link to={`${path}`}></Link>
            </a>
            Войти
          </button>
        </div>
      </div>
    </form>
  );
};
