/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../../static/img/logo.png';

const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/product-details', label: 'Product' },
  { to: '/cart', label: 'Cart' },
  { to: '/checkout', label: 'Checkout' },
];

const Navbar = ({ setShowMobile }) => {
  const [active, setActive] = useState('/');

  const navigationLinksList = navigationLinks.map((item) => (
    <li className={active === item.to ? 'active' : ''}>
      <NavLink to={item.to} onClick={() => setActive(item.to)}>
        {item.label}
      </NavLink>
    </li>
  ));

  return (
    <React.Fragment>
      <div className="nav-close" onClick={() => setShowMobile(true)}>
        <div className="fa fa-close" aria-hidden="true" />
      </div>

      <div className="logo">
        <NavLink to="/"><img src={logo} alt="" /> </NavLink>
      </div>

      <nav className="amado-nav">
        <ul>
          {navigationLinksList}
        </ul>
      </nav>

      <div className="social-info d-flex justify-content-between">
        <NavLink to="/"><i className="fa fa-pinterest" aria-hidden="true" /></NavLink>
        <NavLink to="/"><i className="fa fa-instagram" aria-hidden="true" /></NavLink>
        <NavLink to="/"><i className="fa fa-facebook" aria-hidden="true" /></NavLink>
        <NavLink to="/"><i className="fa fa-twitter" aria-hidden="true" /></NavLink>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  setShowMobile: PropTypes.func.isRequired,
};

export default Navbar;
