import './Home.css';
import React from 'react';
import ProductItem from '../../product';
import { useProductContext } from '../../../containers/product/context';
import Product from '../../../containers/product/Product';

const HomePage = () => {
  const { products } = useProductContext();
  const renderedItem = products ? products.map((item) => {
    const product = new Product(item);
    return <ProductItem id={product.id} imageSrc={product.mainImageUrl} paragraph={product.name} price={product.price} />;
  }) : '';

  return (
    <div className="products-catagories-area clearfix">
      <div className="amado-pro-catagory clearfix flex-box">
        {renderedItem}
      </div>
    </div>
  );
};

export default HomePage;
