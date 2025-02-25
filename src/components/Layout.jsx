
import React from 'react';
import Banner from './Banner';
import Popup from './Popup';
import Testimonals from './Testimonals';
import Subscribe from './Subscribe';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* Route-specific content will be injected here */}
      {children}

      <Banner />
      <Popup />
      <Testimonals />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;