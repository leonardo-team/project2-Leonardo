import { FC, useCallback, useState } from "react";
import "../css/site.css";

const EMPTY_FORM = {
  login: "",
  password: "",
  password2: "",
};

export const RegisterForm: FC = () => {
  const [form, setForm] = useState(EMPTY_FORM);

  const formClearHandle = useCallback((e) => {
    e.preventDefault();

    setForm(EMPTY_FORM);
  }, []);

  const loginChangeHandle = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      login: e.target.value,
    }));
  }, []);
  const passwordChangeHandle = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  }, []);
  const password2ChangeHandle = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      password2: e.target.value,
    }));
  }, []);

  const formSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();
      if (form.password === form.password2) {
        console.log(form);
      } else {
        return console.error("пароли не совпадают");
      }
    },
    [form]
  );

  return (
    <form className="RegisterForm" onSubmit={formSubmitHandle}>
      <div className="RegisterForm-Field Register-Login">
        <label htmlFor="login">Имя пользователя</label>
        <input
          className="RegisterForm-Control"
          id="login"
          name="login"
          onChange={loginChangeHandle}
          value={form.login}
        />
      </div>
      <div className="RegisterForm-Field">
        <label htmlFor="password">Пароль</label>
        <input
          className="RegisterForm-Control"
          id="password"
          name="password"
          type="password"
          onChange={passwordChangeHandle}
          value={form.password}
        />
      </div>
      <div className="RegisterForm-Field">
        <label htmlFor="comment">Повторите пароль</label>
        <input
          className="RegisterForm-Control"
          id="password2"
          name="password2"
          onChange={password2ChangeHandle}
          value={form.password2}
        />
      </div>
      <div className='RegisterForm__Button-Block'>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary"
          type="submit"
        >
          Отправить
        </button>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          type="button"
          onClick={formClearHandle}
        >
          Очистить
        </button>
      </div>
    </form>
  );
};
