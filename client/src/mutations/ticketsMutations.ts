import { gql } from '@apollo/client';

export const ADD_TICKET_MUTATION = gql`
  mutation addTicket($number: String!, $encash: Boolean!, $eventId: ID) {
    addTicket(number: $number, encash: $encash, eventId: $eventId) {
      id
    }
  }
`;

export const DELETE_TICKET_MUTATION = gql`
  mutation deleteTicket($id: ID) {
    deleteTicket(id: $id) {
      id
    }
  }
`;

export const UPDATE_TICKET_MUTATION = gql`
  mutation updateTicket(
    $id: ID
    $number: String!
    $encash: Boolean!
    $eventId: ID
  ) {
    updateTicket(id: $id, number: $number, encash: $encash, eventId: $eventId) {
      number
    }
  }
`;
