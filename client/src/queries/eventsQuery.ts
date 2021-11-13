import { gql } from '@apollo/client';

export const EVENTS_QUERY = gql`
  query eventsQuery($offset: Int, $limit: Int) {
    events(offset: $offset, limit: $limit) {
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
    count
  }
`;
