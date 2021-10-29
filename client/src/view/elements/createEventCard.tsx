import { FC, useCallback, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const EVENTSTATUS = ['Планируется', 'Отменено', 'Прошло'];
const EMPTY_FORM = {
  eventName: '',
  eventDescription: '',
  eventStatus: '', // eventDate(добавить дату через календарь?)
  ticketsNumber: '',
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
      <form className="form-row" onSubmit={formSubmitHandle}>
           <div className="col-sm-10">
        <label htmlFor="eventName">Название</label>
        <input
          className="createForm-Control"
          id="eventName"
          name="eventName"
          onChange={inputChangeHandle}
          value={form.eventName}
        />
      </div>
      <div className="col-sm-10">
        <label className="form-row" htmlFor="image"> Афиша мероприятия </label>
        <img className="custom-file-input" src={form.image} alt="image" />
        <input
          ref={imageRef}
          className="createForm-Control"
          type="file"
          id="image"
          name="image"
          onChange={imageUploadHandle}
        />
      </div>
      <div className="createForm-Field">
        <label htmlFor="eventDescription">Описание</label>
        <textarea
          className="createForm-Control"
          id="eventDescription"
          name="eventDescription"
          onChange={inputChangeHandle}
          value={form.eventDescription}
        />
      </div>
      <div className="createForm-Field">
        <label htmlFor=" eventStatus">Статус мероприятия</label>
        <select
          className="RegisterForm-Control"
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
      </div>
      <div className="createForm-Field">
        <label htmlFor="ticketsNumber">Количество билетов</label>
        <input
          className="createForm-Control"
          id="ticketsNumber"
          name="ticketsNumber"
          type="ticketsNumber"
          onChange={inputChangeHandle}
          value={form.ticketsNumber}
        />
      </div>
      <button className="btn btn-danger" type="button" onClick={formClearHandle}>
        Отмена
      </button>
      <button className="btn btn-success" type="submit">
        Создать
      </button>
    </form>
  );
};
