const INITIAL_STATE = {
    sections: [
      {
        id:1,
        caseNumber:'001',
        title: 'Dripholic',
        routeName:'dripholic',
        linkUrl: 'dripholic',
        category:'Brand Strategy',
        imageUrl: '/assets/images/cases/case-002.jpg',
      },
      {
        id:2,
        caseNumber:'002',
        title: 'CRISA',
        routeName:'crisa',
        linkUrl: 'crisa',
        category:'App Development',
        imageUrl: '/assets/images/cases/case-004.jpg',
      },
      {
        id:3,
        caseNumber:'003',
        title: 'Avant Studio Architects',
        routeName:'avant',
        linkUrl: 'avant',
        category:'Website Development',
        imageUrl: '/assets/images/cases/case-003.jpg',
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;
  