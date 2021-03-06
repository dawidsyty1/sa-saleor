import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProductsQuery } from '../../apollo/queries/sitemap';
import { useApolloContext } from '../../apollo/client';
import ProductContext from './context';

const ProductProvider = ({ children }) => {
  const { client } = useApolloContext();
  const [products, setProducts] = useState();

  useEffect(() => {
    client.query({
      query: getProductsQuery,
      variables: { perPage: 100, cursor: null },
    })
      .then((result) => {
        console.log('ProductProvider', result);
        setProducts(result.data.products.edges);
      })
      .catch(result => console.log('ERROR!!!:', result));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
