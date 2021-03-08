import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import FourOFour from './animation.component';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="content">
        <div className="wrapper">
        <div className="container">
            <FourOFour />
            <div className="go__home">
                <p>It seems like we couldn't find the page you were looking for &#x2639;</p>
        <Link to='/'> <CustomButton> Go home </CustomButton></Link>
        </div>
    </div>
    </div>
    </div>
)

export default NotFound;
