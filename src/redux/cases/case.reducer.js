import caseData from './cases.data';

const INITIAL_STATE = {
  collections: caseData
};

const caseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default caseReducer;