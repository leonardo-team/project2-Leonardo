import { gql } from '@apollo/client';

export const STATISTIC_QUERY = gql`
  query statisticQuery() {
    statistic() {
      id,
      planned,
      completed,
      canceled
    }
  }
`;
