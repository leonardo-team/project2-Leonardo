import { actions } from './actions';
import { counterReducer } from './reducers/reducers';

type PropertiesTypes<T> = T extends {[key: string]: (...args: any) => infer U} ? U :never;
export type ActionsTypes = PropertiesTypes<typeof actions>;

export type RootState = ReturnType<typeof counterReducer>;


export type RegisterType = {
  login: string,
  password: string,
  password2: string,
 
};

export type RegistersType = {
  eventData: Array<RegisterType>
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