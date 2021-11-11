import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import './App.css';
import Routing from './view/components/routing';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        events: offsetLimitPagination(),
      },
    },
  },
});
const client = new ApolloClient({
  cache: cache,
  uri: 'http://localhost:3005/graphql',
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
