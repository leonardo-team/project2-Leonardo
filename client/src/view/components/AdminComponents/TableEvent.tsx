/* eslint-disable max-len */
import { FC } from 'react';
import '../../../css/custom.css';

import 'materialize-css/dist/css/materialize.min.css';
import { EventBlock } from './EventBlock';
import { EventString } from './EventString';

const eventsData = [
  {
    title: 'Концерт группы Лесоповал',
    description: 'Наши любимые песни которые всегды будет в наших сердцах',
    date: '21.11.2021',
    image: String,
    status: 'planned',
    rate: Number,
    encashTickets: 56,
    visited: Number,
  },
  {
    title: 'Выставка работ Дэвида Линча',
    description: 'картины знаменитого режиссера',
    date: '12.11.2021',
    image: String,
    status: 'close',
    rate: Number,
    encashTickets: 12,
    visited: Number,
  },
  {
    title: 'Всероссийский Марафон',
    description: 'Различные дистанции',
    date: '03.11.2021',
    image: String,
    status: 'check',
    rate: Number,
    encashTickets: 260,
    visited: Number,
  },
];

const eventString = eventsData.map((item, i) => (
  <EventString
    key={i}
    title={item.title}
    date={item.date}
    ticket={item.encashTickets}
    status={item.status}
  />
));

export const TableEvents = () => {
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
