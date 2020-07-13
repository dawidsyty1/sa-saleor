import React from 'react';

const BasePage = ({ children }) => (
  <div className="main-content-wrapper d-flex clearfix">
    {children}
  </div>
);

export default BasePage;