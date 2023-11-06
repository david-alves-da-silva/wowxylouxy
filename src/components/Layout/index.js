import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Styles from '../../styles/Styles.module.css'

const Layout = ({ children }) => (
    <Router>
        <div style={{ height: 'auto', overflow: 'auto' }}>
            <div className="fixed-top">
                <Nav />
                <Header />
            </div>
            {children}
            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    </Router>
);
export default Layout