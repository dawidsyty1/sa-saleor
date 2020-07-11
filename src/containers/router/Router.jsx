import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../components/page/home/HomePage';


const Router = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/shop" component={HomePage} exact />
    <Route path="/product-details" component={HomePage} exact />
    <Route path="/cart" component={HomePage} exact />
    <Route path="/checkout" component={HomePage} exact />
  </Switch>
);

export default Router;