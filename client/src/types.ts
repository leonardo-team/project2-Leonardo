import { actions } from './store/actions';
import { counterReducer } from './store/reducers/reducers';

type PropertiesTypes<T> = T extends {[key: string]: (...args: any) => infer U} ? U :never;
export type ActionsTypes = PropertiesTypes<typeof actions>;

export type RootState = ReturnType<typeof counterReducer>;

export type StatisticType = {
  planned: number,
  completed: number,
  canceled: number,
};

export type EventType = {
  id: string,
  title: string,
  description: string,
  date: string,
  image: string,
  status: 'completed' | 'planned' | 'canceled',
  rate: number,
  encashTickets: number,
  visited: number,
};

export type EventsType = {
  eventData: Array<EventType>
};

export type EventStringType = {
  title: string,
  date: string,
  tickets: number,
  status: string
}

export type TicketType = {
  id: string,
  number: string,
  encash: string,
  eventId: string,
};

export type TicketsType = {
  tickets: Array<TicketType>
}

export interface IAppState {
  statistic: StatisticType,
  eventData: Array<EventType>,
  tickets: Array<TicketType>,
}

export interface IAdminState {
  statistic: StatisticType,
  eventData: Array<EventType>,
  path: string
}
