import React from 'react';
import {
    Link,
  } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="w-100">
                <Link to="/ReceiveLink">
                    Link base
                </Link>
                <Link to="/">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Navbar;