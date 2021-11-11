import { FC, useCallback, useState } from 'react';
import '../css/site.css'

const EMPTY_FORM = {
  login: '',
  password: '',
  password2: '',  
};

export const RegisterForm: FC = () => {
  const [form, setForm] = useState(EMPTY_FORM);

  const formClearHandle = useCallback((e) => {
    e.preventDefault();

    setForm(EMPTY_FORM);
  }, []);

  const inputChangeHandle = useCallback((e) => {
    const { target } = e;

    setForm(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  }, []);

  const formSubmitHandle = useCallback((e) => {
    e.preventDefault();

    console.log(form);
  }, [form]);

  return (
    <form className="RegisterForm" onSubmit={formSubmitHandle}>
        <div className="RegisterForm-Field">
        <label htmlFor="login">Имя пользователя</label>
        <input
          className="RegisterForm-Control"
          id="login"
          name="login"
          onChange={inputChangeHandle}
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
          onChange={inputChangeHandle}
          value={form.password}
        />
      </div>    
      <div className="RegisterForm-Field">
        <label htmlFor="comment">Повторите пароль</label>
        <textarea
          className="RegisterForm-Control"
          id="password2"
          name="password2"
          onChange={inputChangeHandle}
          value={form.password2}
        />
      </div>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" type="submit" onClick={formSubmitHandle}>Отправить</button>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="button" onClick={formClearHandle}>Очистить</button>
    </form>
  );
};
