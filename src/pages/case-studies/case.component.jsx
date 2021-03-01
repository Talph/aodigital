import React from 'react';
import { Route } from 'react-router-dom';

import CasesOverview from '../../components/case-studies/cases-overview/cases-overview.component';
import CollectionPage from '../collection/collection.component';

import './case.styles.scss';

const CasePage = ({ match }) => (
  <div className="our-work-page content">
  <div className="wrapper">
  <div className="container">
  <div className='case-page'>
    <Route exact path={`${match.path}`} component={CasesOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
  </div>
  </div>
  </div>
);

export default CasePage;
