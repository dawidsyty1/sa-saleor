import React, { useState, Fragment } from 'react';
import MobileNavbar from '../navbar/MobileNavbar';
import Navbar from '../navbar/Navbar';

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <Fragment>
      <MobileNavbar setShowMobile={() => setShowMobile(true)} />
      <header className={`header-area clearfix ${showMobile ? 'bp-xs-on' : ''}`} >
        <Navbar setShowMobile={e => setShowMobile(true)} />
      </header>
    </Fragment>
  );
};

export default Header;