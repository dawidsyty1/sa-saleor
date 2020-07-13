import React, { useState, Fragment } from 'react';
import MobileNavbar from '../navbar/MobileNavbar';
import Navbar from '../navbar/Navbar';

const Header = ({ children }) => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <Fragment>
      <div className="main-content-wrapper d-flex clearfix">
        <MobileNavbar setShowMobile={() => setShowMobile(true)} />
        <header className={`header-area clearfix ${showMobile ? 'bp-xs-on' : ''}`} >
          <Navbar setShowMobile={e => setShowMobile(true)} />
        </header>
        {children}
      </div>
    </Fragment>
  );
};

export default Header;