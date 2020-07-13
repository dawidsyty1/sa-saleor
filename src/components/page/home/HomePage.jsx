import './Home.css';
import React from 'react';
import Product from '../../product';
import { useProductContext } from '../../../containers/product/context';

const HomePage = () => {
  const { products } = useProductContext();
  const renderedItem = products ? products.map((item) => {
    const url = item.node.images ? item.node.images[0].url : 'https://media.wired.com/photos/5b8999943667562d3024c321/master/w_2560%2Cc_limit/trash2-01.jpg';
    return <Product imageSrc={url} paragraph={item.node.name} header={item.node.price || 0} />;
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
