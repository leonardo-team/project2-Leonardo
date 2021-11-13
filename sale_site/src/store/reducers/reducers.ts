import { ActionsTypes, SiteAppState } from '../../types';

const initialState: SiteAppState = {
  eventData: [
    {
      id: '1',
      title: 'Событие 1',
      description: 'Событие 1',
      date: '18.11.2021 18.00',
      image: 'string',
      status: 'planned',
      rate: 1,
      encashTickets: 5,
      visited: 0,
    },
    {
      id: '2',
      title: 'Событие 2',
      description: 'Событие 2',
      date: '18.11.2021 18.00',
      image: 'string',
      status: 'completed',
      rate: 1,
      encashTickets: 4,
      visited: 0,
    },
    {
      id: '3',
      title: 'Событие 3',
      description: 'Событие 3',
      date: '18.11.2021 18.00',
      image: 'string',
      status: 'canceled',
      rate: 1,
      encashTickets: 3,
      visited: 0,
    },
  ],
  tickets: [],
};

export const counterReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'GET_SITE_STATISTIC':
      return { ...state, statistic: action.payload };

    case 'CHANGE_SITE_STATISTIC':
      return { ...state, statistic: action.payload };

    case 'GET_EVENTS':
      return { ...state, eventData: action.payload };

    case 'GET_TICKETS_PULL':
      return { ...state, tickets: action.payload };

    default:
      return state;
  }
};
