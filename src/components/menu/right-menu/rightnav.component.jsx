import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from '../menu.component';


import './rightnav.styles.scss';


const RightNav = ({isOpen, handleMenu}) => {
  return (
      <nav className={`${isOpen ? 'open' : 'close'} rightNav`}>
      { menuData.length && (
        <ul className="menu">
          {menuData.map(item => (
            <li key={item.label}>
              <NavLink className="menu-item" activeClassName="active" onClick={handleMenu} to={`${item.Url}`}>{item.label}</NavLink>
            </li>
          ))}
          
        </ul>
            )}
      </nav>
      )
    }


export default RightNav