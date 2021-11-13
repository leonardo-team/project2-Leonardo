import { RootState } from '../../types';

export const selectStatistic = (state: RootState) => state.statistic;
export const selectEventList = (state: RootState) => state.eventData;
