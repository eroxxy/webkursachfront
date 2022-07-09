import React from 'react';
import { Link } from 'react-router-dom'

import classes from './Header.module.scss'

const Header = () => {
    return (
        <div className={classes.container}>
            <Link to="/orders">ORDERS</Link>
        </div>
    );
};

export default Header;