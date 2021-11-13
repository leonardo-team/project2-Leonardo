import { StatisticType, EventType, TicketType } from '../types';

export const actions = {
  getStatistic: (statObj: StatisticType) => ({
    type: 'GET_SITE_STATISTIC',
    payload: statObj,
  } as const
  ),

  changeStatistic: (statObj: StatisticType) => ({
    type: 'CHANGE_SITE_STATISTIC',
    payload: statObj,
  } as const
  ),

  getEventList: (eventList: Array<EventType>) => ({
    type: 'GET_EVENTS',
    payload: eventList,
  } as const
  ),

  getTicketsPull: (ticketsList: Array<TicketType>) => ({
    type: 'GET_TICKETS_PULL',
    payload: ticketsList,
  } as const
  ),
};
