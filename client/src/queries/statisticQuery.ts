import { gql } from '@apollo/client';

export const STATISTIC_QUERY = gql`
  query statisticsQuery {
    statistics {
      id
      planned
      completed
      canceled
    }
  }
`;
