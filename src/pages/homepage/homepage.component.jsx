import React from 'react';
import Hero from '../../components/hero-banner/hero.component'
import './homepage.styles.scss';


const HomePage = () => (
    <div className="homepage content">
        <div className="container">
            <div className="side__padding">
            <Hero/>
            </div>
        
        </div>
    </div>
)

export default HomePage;