import { gql } from '@apollo/client';

export const UPDATE_STATISTIC_MUTATION = gql`
  mutation updateStatistic($id: ID, $planned: Int!, $completed: Int!, $canceled: Int!) {
    updateStatistic(id: $id, planned: $planned, completed: $completed, canceled: $canceled) {
      planned
      completed
      canceled
    }
  }
`;
