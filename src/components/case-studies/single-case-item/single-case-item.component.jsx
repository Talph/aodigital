import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import {ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

import '../single-case-item/single-case-item.styles.scss';

const SingleCaseItem = ({ item }) => {
    const { id, name, caseNumber, category, description, galleryUrl, galleryUrla, galleryUrlb, galleryUrlc } = item;

    return (
        <div className={`${id} single-case-item`}>
                    <div className="case-footer">
        <span className="arrow"><Arrow width="40"/> </span>
        <span className="name" key={id}> { name }</span>
        <span className="caseNumber"> { caseNumber }</span>
        <span className="category"> { category }</span>
        </div>
        <div className="image"
        style={{
            backgroundImage: `url(${galleryUrl})`
        }}
        />
        <div className="case-gallery">
        <div className="case-gallery-content-img"
        style={{
            backgroundImage: `url(${galleryUrla})`
        }}
        />
        <div className="case-gallery-content-img"
        style={{
            backgroundImage: `url(${galleryUrlb})`
        }}
        />
        <div className="case-gallery-content-img"
        style={{
            backgroundImage: `url(${galleryUrlc})`
        }}
        />
            </div>
        <p className="description">{ description }</p>
        </div>

    )

};

const mapDispatchToProps = dispatch => ({
    addItem: item =>dispatch(item)
});

export default connect(null, mapDispatchToProps)(SingleCaseItem);