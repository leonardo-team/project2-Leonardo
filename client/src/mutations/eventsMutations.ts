import { gql } from '@apollo/client';

export const ADD_EVENT_MUTATION = gql`
  mutation addEvent(
    $title: String!
    $description: String
    $date: Date!
    $image: String
    $status: String!
    $encashTickets: Int!
    $visited: Int!
  ) {
    addEvent(
      title: $title
      description: $description
      date: $date
      image: $image
      status: $status
      encashTickets: $encashTickets
      visited: $visited
    ) {
      id
    }
  }
`;

export const DELETE_EVENT_MUTATION = gql`
  mutation deleteEvent($id: ID) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

export const UPDATE_EVENT_MUTATION = gql`
  mutation updateEvent(
    $id: ID
    $title: String!
    $description: String
    $date: Date!
    $image: String
    $status: String!
    $encashTickets: Int!
    $visited: Int!
  ) {
    updateEvent(
      id: $id
      title: $title
      description: $description
      date: $date
      image: $image
      status: $status
      encashTickets: $encashTickets
      visited: $visited
    ) {
      title
    }
  }
`;
