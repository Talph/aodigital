import React from 'react';

import Directory from '../../components/directory/directory.component';

import './our-work.styles.scss';

const OurWork = () => (
    <div className="our-work-page content">
    <div className="wrapper">
    <div className="container">
    <div className="page-header">
            <h1 className="header__title">We study each client's case.<br/>We understand the objectives<br/>and deliver efficient solutions.</h1>
                </div>
                <Directory />
        </div>
    </div>
    </div>   
)

export default OurWork;