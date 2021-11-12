import { StatisticType, EventType, TicketType } from '../../types';

export const actions = {
  getStatistic: (statObj: StatisticType) => ({
    type: 'GET_SITE_STATISTIC',
    payload: statObj,
  }),

  changeStatistic: (statObj: StatisticType) => ({
    type: 'CHANGE_SITE_STATISTIC',
    payload: statObj,
  }),

  getEventList: (eventList: Array<EventType>) => ({
    type: 'GET_EVENTS',
    payload: eventList,
  }),

  getTicketsPull: (ticketsList: Array<TicketType>) => ({
    type: 'GET_TICKETS_PULL',
    payload: ticketsList,
  }),
};
