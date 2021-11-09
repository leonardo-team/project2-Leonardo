import { FC, useCallback, useRef, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../../css/custom.css';

const EVENTSTATUS = ['Планируется', 'Отменено', 'Прошло'];
const EMPTY_FORM = {
  eventName: '',
  eventDescription: '',
  eventStatus: '',
  ticketsNumber: '',
  encashTickets: '',
  visited: '',
  image: ''
};

export const CreateForm: FC = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const formClearHandle = useCallback(e => {
    e.preventDefault();

    setForm(EMPTY_FORM);
  }, []);

  const inputChangeHandle = useCallback(e => {
    const { target } = e;

    setForm(prev => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }));
  }, []);

  const formSubmitHandle = useCallback(
    e => {
      e.preventDefault();
    },
    [form]
  );

  const imageUploadHandle = useCallback(() => {
    const imageInput = imageRef.current;

    const file = imageInput?.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', e => {
      setForm(prev => ({
        ...prev,
        image: String(e.target?.result)
      }));
    });

    reader.readAsDataURL(file);
  }, []);

  return (
        <main>
          <div className='container'>
          <form className='user' />
          <table className='table table-hover' />
            <tbody>
            <tr>
              <input type='hidden' name='pastdata' value='{{ usr.id }}' />
              <td><label htmlFor="eventName">Название</label></td>
              <td> <input
                className="createForm-Control"
                id="eventName"
                name="eventName"
                onChange={inputChangeHandle}
                value={form.eventName}
              /></td>
            </tr>

          <tr>
            <td><label htmlFor="date">Дата проведения</label></td>
            <td> <input
              id="date"
              type="date"
              name="date"
              onChange={inputChangeHandle}
              /></td>
            </tr>

        <tr>
        <td><label className="form-row" htmlFor="image"> Афиша мероприятия </label></td>
        <td><img className="custom-file-input" src={form.image} alt="image" /></td>
        <td><input
          ref={imageRef}
          type="file"
          id="image"
          name="image"
          onChange={imageUploadHandle}
        /></td>
        </tr>
      <tr>
      <td><label htmlFor="eventDescription">Описание</label></td>
      <td> <textarea
          id="eventDescription"
          name="eventDescription"
          onChange={inputChangeHandle}
          value={form.eventDescription}
            /></td>
          </tr>

          <tr>
          <td><label htmlFor=" eventStatus">Статус мероприятия</label></td>
            <td><select
          id=" eventStatus"
          name=" eventStatus"
          onChange={inputChangeHandle}
          value={form.eventStatus}
        >
          <option value="">Выберите...</option>
          {EVENTSTATUS.map(stat => (
            <option key={stat} value={stat.toLowerCase()}>
              {stat}
            </option>
          ))}
        </select>
        </td>
        </tr>

        <tr>
        <td><label htmlFor="ticketsNumber">Количество билетов</label></td>
        <td><input
          id="ticketsNumber"
          name="ticketsNumber"
          type="number"
          onChange={inputChangeHandle}
          value={form.ticketsNumber}
        /></td>
      </tr>

      <tr>
        <td><label htmlFor="ticketsNumber">Реализовано билетов</label></td>
        <td><input
          id="encashTickets"
          name="encashTickets"
          type="number"
          onChange={inputChangeHandle}
          value={form.ticketsNumber}
        /></td>
      </tr>

      <tr>
        <td><label htmlFor="ticketsNumber">Реальных посетителей</label></td>
        <td><input
          className="createForm-Control"
          id="visited"
          name="visited"
          type="number"
          onChange={inputChangeHandle}
          value={form.visited}
        /></td>
      </tr>

      <button className="btn btn-success" type="submit" onClick={formSubmitHandle}>
        Создать
      </button>
      <button className="btn btn-danger" type="button" onClick={formClearHandle}>
        Отмена
      </button>
      </tbody>
      </div>
    </main>
  );
};
