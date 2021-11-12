import { IAppState, ActionsTypes } from '../types';

const initialState: IAppState = {
  statistic: {
    id: '',
    planned: 0,
    completed: 0,
    canceled: 0,
  },
  events: [],
  tickets: [],
};

export function counterReducer(state = initialState, action: ActionsTypes) {
  switch (action.type) {
    case 'GET_SITE_STATISTIC':
      return { ...state, statistic: action.payload };

    case 'CHANGE_SITE_STATISTIC':
      return { ...state, statistic: action.payload };

    case 'GET_EVENTS':
      return { ...state, events: action.payload };

    case 'GET_TICKETS_PULL':
      return { ...state, tickets: action.payload };

    default:
      return state;
  }
}
