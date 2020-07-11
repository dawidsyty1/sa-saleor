import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import './static/css/style.css';
import './static/css/core-style.css';
import { client } from './apollo/client';

const App = () => (
  <ApolloProvider client={client}>
    hello
  </ApolloProvider>
);

export default App;
