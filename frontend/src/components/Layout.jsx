import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="layout wrapper">
      <header className="header"><NavBar /></header>
      <main className="main">{children}</main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;