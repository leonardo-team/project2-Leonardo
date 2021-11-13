import { RootState } from '../../types';

export const selectStatistic = (state: RootState) => state.statistic;
export const selectEventList = (state: RootState) => state.eventData;
export const selectEventsTitle = (state: RootState) => state.eventsTitle;
export const selectCorrectedEvent = (state: RootState) => state.correctedEvent;
