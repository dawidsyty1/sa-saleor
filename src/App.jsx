import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import './static/css/style.css';
import './static/css/core-style.css';
import { client } from './apollo/client';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Search from './components/layout/input/Search';
import Router from './containers/router/Router';

const App = () => (
  <ApolloProvider client={client}>
    <Search />
    <Header />
    <Router />
    <Footer />
  </ApolloProvider>
);

export default App;
