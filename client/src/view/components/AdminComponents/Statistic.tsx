/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { FC } from 'react';
import '/Frontend/education/HomeWork/FinalProject/project2-Leonardo/client/src/css/custom.css';
import { EventBlock } from './EventBlock';

const statistic: Record<string, number> = {
  planned: 14,
  completed: 12,
  canceled: 23
};

export const Statistic = ()=>{
  const arrayEvents = [
    {
      title: 'planned',
      stat: 0
    },
    {
      title: 'completed',
      stat: 0
    },
    {
      title: 'canceled',
      stat: 0
    },
    {
      title: 'allEvents',
      stat: 0
    }
  ];

  arrayEvents.forEach((item)=>{
    if (!statistic[item.title]) {
      item.stat = statistic.planned + statistic.completed + statistic.canceled;
    } else { item.stat = statistic[item.title]; }
  });

  const eventBlock = arrayEvents.map((item, i) => <EventBlock key={i} title={item.title} stat={item.stat}/>);

  return (
    <div className='row'>
      {eventBlock}
    </div>);
};
