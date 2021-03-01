import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {ReactComponent as BackArrow} from '../../assets/icons/back.svg';

import SingleCaseItem from '../../components/case-studies/single-case-item/single-case-item.component';

import { selectCase } from '../../redux/cases/case.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <Link className="back-btn" to="/our-work"> <BackArrow width="40" color="#fff" height="40"/> <small className="small-link">back</small></Link>
      <div className="page-header">
            <h1 className="header__title-case">{title}</h1>
                </div>
      <div className='items'>
        {items.map(item => (
          <SingleCaseItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCase(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
