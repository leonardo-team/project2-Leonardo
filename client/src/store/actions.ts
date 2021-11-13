import { StatisticType, EventType, TicketType } from '../types';

function appointTitle(event: string) {
  switch (event) {
    case 'allEvents':
      return 'Все события';

    case 'planned':
      return 'Планируемые события';

    case 'canceled':
      return 'Отмененные события';

    default:
      return 'Состоявшиеся события';
  }
}

export const actions = {
  getStatistic: (statObj: StatisticType) => ({
    type: 'GET_SITE_STATISTIC',
    payload: statObj,
  } as const
  ),

  getEventList: (eventList: Array<EventType>) => ({
    type: 'GET_EVENTS',
    payload: eventList,
  } as const
  ),

  changeEventsTitle: (event: string) => ({
    type: 'CHANGE_EVENTS_TITLE',
    payload: appointTitle(event),
  } as const
  ),

  createCorrectedEvent: (event: EventType) => ({
    type: 'CREATE_CORRECTED_EVENT',
    payload: event
  } as const
  ),

  getTicketsPull: (ticketsList: Array<TicketType>) => ({
    type: 'GET_TICKETS_PULL',
    payload: ticketsList,
  } as const
  ),
};
