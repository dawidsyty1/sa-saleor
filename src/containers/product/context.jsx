import React from 'react';

const ProductContext = React.createContext();

export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;
export const useProductContext = () => React.useContext(ProductContext);

export default ProductContext;
