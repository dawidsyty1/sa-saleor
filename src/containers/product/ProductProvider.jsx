import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSixProductsList } from '../../apollo/queries/products';
import { useApolloContext } from '../../apollo/client';
import ProductContext from './context';

const ProductProvider = ({ children }) => {
  const { client } = useApolloContext();
  const [products, setProducts] = useState();

  useEffect(() => {
    client.query({
      query: getSixProductsList,
    })
      .then((result) => {
        console.log('result', result);
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
