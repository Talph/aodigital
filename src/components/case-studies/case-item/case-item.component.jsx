import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import {ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

import '../case-item/case-item.styles.scss';

const CaseItem = ({ item }) => {
    const { id, name, imageUrl, caseNumber, category } = item;

    return (
        <div className={`${id} case-item`}>
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="case-footer">
        <span className="arrow"><Arrow width="40"/> </span>
        <span className="name" key={id}> { name }</span>
        <span className="caseNumber"> { caseNumber }</span>
        <span className="category"> { category }</span>
        </div>
        </div>

    )

};

const mapDispatchToProps = dispatch => ({
    addItem: item =>dispatch(item)
});

export default connect(null, mapDispatchToProps)(CaseItem);