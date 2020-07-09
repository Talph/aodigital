import React from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../menu.component';
import SocialMedia from '../../social-media/social-media.component';

import './rightnav.styles.scss';


const RightNav = ({isOpen, handleMenu}) => {
  return (
    <div>
    { menuData.length && (
      <nav>
        <div className={`${isOpen ? 'open' : 'close'} rightNav`}>
        <ul className="menu">
          {menuData.map(item => (
            <li key={item.label}>
              <Link className="menu-item active" onClick={handleMenu} to={`${item.Url}`}>{item.label}</Link>
            </li>
          ))}
          <SocialMedia/>
        </ul>
        </div>
      </nav>
    )}
    </div>
      )
    }


export default RightNav