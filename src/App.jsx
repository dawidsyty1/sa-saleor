import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import { client } from './apollo/client';

const App = () => (
  <ApolloProvider client={client}>
    Hello Word
  </ApolloProvider>
);

export default App;
