import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CasePreview from '../case-preview/case-preview.component';

import { selectCasesForPreview } from '../../../redux/cases/case.selectors';

import './cases-overview.styles.scss';


const CaseOverview = ({ studies }) => (

<div className="cases-overview">
<div className="page-header">
            <h1 className="header__title">We study each client's case.<br/>We understand the objectives and deliver efficient solutions.</h1>
                </div>
        {
            studies.map(({ id, ...otherCaseProps}) => (
                <CasePreview key={id} {...otherCaseProps} />
            ))
        }
  </div>
);

const mapStateToProps = createStructuredSelector({
    studies: selectCasesForPreview
});

export default connect(mapStateToProps)(CaseOverview);