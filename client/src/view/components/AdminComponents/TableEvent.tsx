import { FC } from 'react';
import '../../../css/custom.css';
import { EVENTS_QUERY } from '../../../queries/eventsQuery';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import { EventString } from './EventString';
import { selectEventList, selectEventsTitle } from '../../../store/selectors/selectors';
import { actions } from '../../../store/actions';

export const TableEvents: FC = () => {
  const { data = {}, fetchMore } = useQuery(EVENTS_QUERY, {
    variables: { date: '' },
    notifyOnNetworkStatusChange: true,
  });

  const { events = [] } = data;
  if (events.length > 0) {
    const dispatch = useDispatch();
    dispatch(actions.getEventList(events));
  }

  const eventData = useSelector(selectEventList);

  const eventsTitle = useSelector(selectEventsTitle);

  const eventString = eventData
    .filter(item => {
      switch (eventsTitle) {
        case 'Отмененные события':
          return item.status === 'canceled';

        case 'Планируемые события':
          return item.status === 'planned';

        case 'Состоявшиеся события':
          return item.status === 'completed';

        default:
          return item;
      }
    })
    .map((item, i) => <EventString key={i} event={item} />);

  return (
    <div className="row">
      <div className="container">
        <h3 className="center-align">{eventsTitle}</h3>
        <div className="custom-responsive">
          <table className="striped hover centered">
            <thead className="thead">
              <tr>
                <th>Название</th>
                <th>Дата проведения</th>
                <th>Реализовано билетов</th>
                <th>Статус</th>
                <th>Редактировать / Удалить</th>
              </tr>
            </thead>
            <tbody className="tbody">{eventString}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
