import React from 'react';
import { withRouter} from 'react-router-dom';
import CaseItem from '../case-item/case-item.component';

import './case-preview.styles.scss';

const CasePreview = ({ items, history, match, routeName }) => (
  <div className='case-preview'>
    <div className={`preview`} onClick={() => history.push(`${match.url}/${routeName}`)}>
      {items
        .filter((item, idx) => idx <= 1)
        .map(item => (
          <CaseItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CasePreview);