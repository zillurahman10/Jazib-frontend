// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomNavbar } from './Components/Navbar/Navbar.jsx';
import { FooterWithSitemap } from './Components/Footer/Footer.jsx';

const Layout = () => {
  return (
    <>
      <CustomNavbar />
      <main style={{ minHeight: 'calc(100vh - 100px)' }}>
        <Outlet /> {/* This will render the content of the current route */}
      </main>
      <FooterWithSitemap />
    </>
  );
};

export default Layout;
