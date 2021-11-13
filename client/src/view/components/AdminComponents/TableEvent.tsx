import { FC } from 'react';
import '../../../css/custom.css';

import 'materialize-css/dist/css/materialize.min.css';
import { EventString } from './EventString';

import { EventsType } from '../../../types';

export const TableEvents: FC<EventsType> = ({ eventData }) => {
  const eventString = eventData.map((item, i) => (
    <EventString
      key={i}
      title={item.title}
      date={item.date}
      status={item.status}
      tickets={item.encashTickets}
    />
  ));

  return (
    <div className="row">
      <div className="container">
        <h3 className="center-align">Список Событий</h3>
        <div className="custom-responsive">
          <table className="striped hover centered">
            <thead>
              <tr>
                <th>Название</th>
                <th>Дата проведения</th>
                <th>Реализовано билетов</th>
                <th>Статус</th>
                <th>Редактировать / Удалить</th>
              </tr>
            </thead>
            <tbody>{eventString}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
