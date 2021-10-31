import { gql } from '@apollo/client';

export const TICKETS_QUERY = gql`
  query ticketsQuery($number: String) {
    tickets(number: $number) {
      id
      number
      encash
      event {
        id
        title
      }
    }
  }
`;
