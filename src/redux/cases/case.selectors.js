import { createSelector } from 'reselect';

const selectCaseItem = state => state.caseItem;

export const selectCases = createSelector(
  [selectCaseItem],
  caseItem => caseItem.collections
);

export const selectCasesForPreview = createSelector(
  [selectCases],
  cases => Object.keys(cases).map(key => cases[key])
);

export const selectCase = collectionUrlParam =>
  createSelector(
    [selectCases],
    cases => cases[collectionUrlParam]
  );
