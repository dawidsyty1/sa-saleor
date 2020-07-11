import React from 'react';
import { ApolloConsumer } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://172.26.0.3:8000/graphql/',
});

const ApolloWrappedConsumer = (Component) => {
  return (props) => (
    <ApolloConsumer>
      {(client) => <Component  {...props} client={client} />}
    </ApolloConsumer>
  );
};

export default ApolloWrappedConsumer;
