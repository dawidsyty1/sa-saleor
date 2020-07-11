import React from 'react';
import ApolloClient from 'apollo-boost';
import { getApolloContext } from '@apollo/react-hooks';

export const client = new ApolloClient({
  uri: 'http://172.26.0.3:8000/graphql/',
});

export const useApolloContext = () => React.useContext(getApolloContext());
