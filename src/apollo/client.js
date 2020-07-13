import React from 'react';
import ApolloClient from 'apollo-boost';
import { getApolloContext } from '@apollo/react-hooks';

export const client = new ApolloClient({
  uri: 'http://18.130.233.98:8000/graphql/',
  rejectUnauthorized: false,
});

export const useApolloContext = () => React.useContext(getApolloContext());
