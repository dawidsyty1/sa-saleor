import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategoriesQuery } from '../../apollo/queries/sitemap';
import { useApolloContext } from '../../apollo/client';
import CategoryContext from "./context";

const CategoryProvider = ({ children }) => {
  const { client } = useApolloContext();
  const [products, setProducts] = useState();

  useEffect(() => {
    client.query({
      query: getCategoriesQuery,
      variables: { perPage: 100, cursor: null },
    })
      .then((result) => {
        console.log('CategoryProvider', result);
        setProducts(result.data.categories.edges);
      })
      .catch(result => console.log('ERROR!!!:', result));
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryProvider;
