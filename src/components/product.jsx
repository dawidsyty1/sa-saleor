import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ id, imageSrc, paragraph, price }) => (
  <div className="single-products-catagory clearfix">
    <NavLink to={`/shop/${id}`}>
      <img src={imageSrc} alt="" />
      <div className="hover-content">
        <div className="line" />
        <p>{paragraph}</p>
        <h4>{price}</h4>
      </div>
    </NavLink>
  </div>
);

export default Product;
