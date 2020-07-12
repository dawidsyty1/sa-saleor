import React from 'react';

const CategoryContext = React.createContext();

export const CategoryProvider = CategoryContext.Provider;
export const CategoryConsumer = CategoryContext.Consumer;
export const useCategoryContext = () => React.useContext(CategoryContext);

export default CategoryContext;
