import { FC } from 'react';
import { EventBlock } from './EventBlock';
import { useQuery } from '@apollo/client';
import { STATISTIC_QUERY } from '../../../queries/statisticQuery';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/actions';
import { selectStatistic } from '../../../store/selectors/selectors';

export const Statistic: FC = () => {
  const { loading, data = {} } = useQuery(STATISTIC_QUERY);
  const { statistics = [] } = data;
  if (statistics.length > 0) {
    const dispatch = useDispatch();
    dispatch(actions.getStatistic(statistics[0]));
  }

  const { planned, completed, canceled } = useSelector(selectStatistic);

  const arrayEvents = [
    {
      title: 'planned',
      stat: planned,
    },
    {
      title: 'completed',
      stat: completed,
    },
    {
      title: 'canceled',
      stat: canceled,
    },
    {
      title: 'allEvents',
      stat: planned + completed + canceled,
    },
  ];

  const eventBlock = arrayEvents.map((item, i) => (
    <EventBlock key={i} title={item.title} stat={item.stat} />
  ));

  return <div className="row">{eventBlock}</div>;
};
