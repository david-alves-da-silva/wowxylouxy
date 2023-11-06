import React from 'react';
import Styles from '../../styles/Styles.module.css'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <nav className={`navbar fixed-bottom navbar-dark d-flex justify-content-center ${Styles.bgroxo}`}>
      <Link className="navbar-brand" to="/">
        <small>© Rights Reserved {new Date().getFullYear()}</small>
      </Link>
    </nav>)
}
export default Footer 
