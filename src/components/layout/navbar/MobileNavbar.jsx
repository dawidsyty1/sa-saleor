import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../static/img/logo.png';

const MobileNavbar = ({ setShowMobile }) => {
  return (
    <div className="mobile-nav">
      <div className="amado-navbar-brand">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <a className="amado-navbar-toggler" onClick={setShowMobile}>
        <span />
        <span />
        <span />
      </a>
    </div>
  );
};

MobileNavbar.propTypes = {
  setShowMobile: PropTypes.func.isRequired,
};

export default MobileNavbar;