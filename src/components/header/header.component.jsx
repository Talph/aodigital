import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/ao.svg';
import Navbar from '../menu/navbar/navbar.component';



import './header.styles.scss';

class Header extends React.Component{
    constructor({props}){
        super();
        this.state =({
            searchField: ''
        })
    }

render() {
    return(
        <div className='header'>
            <div className="container">
        <div className='logo-container'>
        <Link className='logo-link' to='/'>
            <Logo className='logo'/>
            </Link>
            </div>
            <div className='navbar-container'>
            <Navbar />
            </div>
            </div>
        </div>
    )
}
}

export default Header;