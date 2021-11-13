import { FC } from 'react';
import { EventBlock } from './EventBlock';
import { StatisticType } from '../../../types';

export const Statistic: FC<StatisticType> = ({ planned, completed, canceled }) => {
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
