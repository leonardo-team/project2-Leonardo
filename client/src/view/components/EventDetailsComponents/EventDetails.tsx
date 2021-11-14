import { FC, useCallback, useRef, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../../css/custom.css';
import { useSelector } from 'react-redux';
import { selectCorrectedEvent } from '../../../store/selectors/selectors';

const EVENTSTATUS = ['Планируется', 'Отменено', 'Прошло'];
const EMPTY_FORM = {
  title: '',
  description: '',
  status: '',
  tickets: 0,
  encashTickets: 0,
  visited: 0,
  image: '',
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
      [target.name]: target.value,
    }));
  }, []);

  const formSubmitHandle = useCallback(
    e => {
      e.preventDefault();
    },
    [form],
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
        image: String(e.target?.result),
      }));
    });

    reader.readAsDataURL(file);
  }, []);

  return (
    <div className="container">
      <form>
        <table className="table table-hover">
          <tbody>
            <tr>
              <td>
                <label htmlFor="title">Название</label>
              </td>
              <td>
                {' '}
                <input
                  className="createForm-Control"
                  id="title"
                  name="title"
                  onChange={inputChangeHandle}
                  value={form.title}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="date">Дата проведения</label>
              </td>
              <td>
                {' '}
                <input id="date" type="date" name="date" onChange={inputChangeHandle} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="form-row" htmlFor="image">
                  {' '}
                  Афиша мероприятия{' '}
                </label>
              </td>
              <td>
                <img className="custom-file-input" src={form.image} alt="image" />
              </td>
              <td>
                <input
                  ref={imageRef}
                  type="file"
                  id="image"
                  name="image"
                  onChange={imageUploadHandle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Описание</label>
              </td>
              <td>
                {' '}
                <textarea
                  id="description"
                  name="description"
                  onChange={inputChangeHandle}
                  value={form.description}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="status">Статус мероприятия</label>
              </td>
              <td>
                <select
                  id="status"
                  className="form-select"
                  name="status"
                  onChange={inputChangeHandle}
                  value={form.status}
                >
                  <option value="" selected disabled>
                    Выберите...
                  </option>
                  {EVENTSTATUS.map(stat => (
                    <option key={stat} value={stat.toLowerCase()}>
                      {stat}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="tickets">Количество билетов</label>
              </td>
              <td>
                <input
                  id="tickets"
                  name="tickets"
                  type="number"
                  onChange={inputChangeHandle}
                  value={form.tickets}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="encashTickets">Реализовано билетов</label>
              </td>
              <td>
                <input
                  id="encashTickets"
                  name="encashTickets"
                  type="number"
                  onChange={inputChangeHandle}
                  value={form.encashTickets}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="visited">Реальных посетителей</label>
              </td>
              <td>
                <input
                  className="createForm-Control"
                  id="visited"
                  name="visited"
                  type="number"
                  onChange={inputChangeHandle}
                  value={form.visited}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn waves-effect waves-light red"
                  type="button"
                  onClick={formClearHandle}
                >
                  Отмена
                </button>
              </td>
              <td>
                <button
                  className="btn waves-effect waves-teal"
                  type="submit"
                  onClick={formSubmitHandle}
                >
                  Создать
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
