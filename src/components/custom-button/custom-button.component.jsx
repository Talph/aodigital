import React from 'react';
import './custom-button.styles.scss';

const CustomButoon = ({children, ...otherProps}) =>(
    <button className="learn-ao"  {...otherProps}>
    <span className="circle" aria-hidden="true">
<span className="icon arrow"></span>
    </span>
<span className="button-text">{children}</span>
  </button>

)

export default CustomButoon;