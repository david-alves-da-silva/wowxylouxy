import React from 'react';
const Footer = () => {
  return (
    <nav className="navbar fixed-bottom navbar-dark bg-primary d-flex justify-content-center">
      <a className="navbar-brand" href="#">
        <small>© All Rights Reserved {new Date().getFullYear()}</small>
      </a>
    </nav>)
}
export default Footer 
