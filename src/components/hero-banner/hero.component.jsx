import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import Typer from '../typing-text/typing-text.component';
import './hero.styles.scss';

const Hero = () => (
<div className="hero-container">
<div className="hero">
    <div className="hero-text">
       We are a <span className="italics ao-yellow">digital</span> agency for brand innovation and <span className="italics ao-green">extraordinary</span> experiences.
    </div>
<div className="learn__more__button">
    <Link to='/agency'> <CustomButton >
   LEARN MORE
    </CustomButton>
    </Link>
</div>
    <Typer
      dataText={["First, We dream","Next, We design","Lastly, We Build!"]} 
    />
</div>
<div className="solution-container">
            <div className="solutions">
              <span className="tiny-box"/>Strategy  <span className="tiny-box"/>Design  <span className="tiny-box"/>Advertising <span className="tiny-box"/>Development
            </div>
          </div>
</div>
)


export default Hero;