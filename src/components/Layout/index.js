import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Layout = ({ children }) => (
    <Router>
        <div style={{ height: 'auto', overflow: 'auto' }}>
            {children}
        </div>
    </Router>
);
export default Layout