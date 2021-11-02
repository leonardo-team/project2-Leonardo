import React from 'react';
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import { offsetLimitPagination } from '@apollo/client/utilities';

// import { Admin } from './view/pages/Admin';

import './App.css';
import { CreateForm } from './view/components/EventDetails';

/*
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
*/

function App() {
  return (
<<<<<<< HEAD
    // <ApolloProvider client={client}>
    <div className="App">
      <CreateForm />
    </div>
    //  </ApolloProvider>
=======
    <ApolloProvider client={client}>
      <div className="App">
        <Admin />
      </div>
    </ApolloProvider>

>>>>>>> 2bc39d0 (admin no functional)
  );
}

export default App;
