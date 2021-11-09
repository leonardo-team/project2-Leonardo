import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import { Admin } from './view/pages/Admin';

import './App.css';
import Routing from './view/components/routing';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        event: offsetLimitPagination(),
        events: offsetLimitPagination(),
        ticket: offsetLimitPagination(),
        tickets: offsetLimitPagination()
      }
    }
  }
});
const client = new ApolloClient({
  cache: cache,
  uri: 'http://localhost:3005/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">

      <Routing />

    </div>
     </ApolloProvider>
  );
}

export default App;
