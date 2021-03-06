import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import './static/css/style.css';
import './static/css/core-style.css';
import { client } from './apollo/client';
import ProductProvider from './containers/product/ProductProvider';
import CategoryProvider from './containers/category/CategoryProvider';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Router from './containers/router/Router';
import BasePage from './components/page/base/Base';

const App = () => (
  <ApolloProvider client={client}>
    <CategoryProvider>
      <ProductProvider>
        <BasePage>
          <Header />
          <Router />
        </BasePage>
        <Footer />
      </ProductProvider>
    </CategoryProvider>
  </ApolloProvider>
);

export default App;
