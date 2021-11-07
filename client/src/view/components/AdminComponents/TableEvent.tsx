/* eslint-disable max-len */
import { FC } from 'react';
import '/Frontend/education/HomeWork/FinalProject/project2-Leonardo/client/src/css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';
import { EventBlock } from './EventBlock';
import { EventString } from './EventString';

const eventData = {
  title: 'Концерт группы Лесоповал',
  description: 'Наши любимые песни которые всегды будет в наших сердцах',
  date: '21.11.2021',
  image: String,
  status: '',
  rate: Number,
  encashTickets: 56,
  visited: Number
};

export const TableEvents = ()=>{
  return (
        <div className="TableEvents">
                <h3 className='center-align'>Сюда будем выводить список событий</h3>
                <div className='custom-responsive'>
                    <table className='striped hover centered'>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Дата проведения</th>
                                <th>Реализовано билетов</th>
                                <th>Статус</th>
                                <th>Редактировать / Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EventString title={eventData.title} date={eventData.date} ticket={eventData.encashTickets} status={eventData.status} />
                        </tbody>
                    </table>
                </div>
        </div>
  );
};
