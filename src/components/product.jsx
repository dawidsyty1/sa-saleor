import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ imageSrc, paragraph, header }) => (
  <div className="single-products-catagory clearfix">
    <NavLink to="/shop">
      <img src={imageSrc} alt="" />
      <div className="hover-content">
        <div className="line" />
        <p>{paragraph}</p>
        <h4>{header}</h4>
      </div>
    </NavLink>
  </div>
);

export default Product;
