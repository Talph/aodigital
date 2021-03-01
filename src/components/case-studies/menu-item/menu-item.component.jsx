import React from 'react';

import'./menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import {ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

const MenuItem = ({ id, title, imageUrl, caseNumber, category, history, match, linkUrl}) => (
<div className={`${caseNumber} case-preview`} onClick={() => history.push(`${match.url}/${linkUrl}`)}>
    <div className="image"
style={{
    backgroundImage: `url(${imageUrl})`
}}
/>
<div className="case-footer">
<span className="arrow"><Arrow width="40"/> </span>
<span className="name" key={id}> { title.toUpperCase() }</span>
<span className="caseNumber"> {'//'} { caseNumber }</span>

<span className="category">{ category }</span>
</div>
</div>
);

export default withRouter(MenuItem);