import { gql } from '@apollo/client';

export const EVENTS_QUERY = gql`
  query eventsQuery($date: String) {
    events(date: $date) {
      id
      title
      description
      date
      image
      status
      rate
      encashTickets
      visited
      tickets {
        id
        encash
      }
    }
  }
`;
