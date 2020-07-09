import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/icons/fb.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/ig.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';

import './social-media.styles.scss';

const SocialMedia = ({children, ...otherProps}) => (
    < span className="social-media">

<li><Link className="menu-item active" target="_blank" to="#">
<Facebook className="facebook social menu-item active"/>
</Link></li>

<li><Link  className="menu-item active" target="_blank" to="#">
<Linkedin className="linkedin social"/>
</Link></li>

<li><Link  className="menu-item active" target="_blank" to="#">
<Twitter className="Twitter social"/>
</Link></li>

<li><Link  className="menu-item active" target="_blank" to="#">
<Youtube className="youtube social"/>
</Link></li>

</span>
)

export default SocialMedia;