import React from 'react';
import Burger from '../burger/burger.component';
import './navbar.styles.scss';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Burger />
    </div>
  )
}

export default Navbar