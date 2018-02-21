const emptyState = {};

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]:[]};
    case 'EXPENSE_CREATE':
      let categoryID = payload.categoryID;
      let category = state[categoryID];
      let result = [...category, payload];
      return {...state, [categoryID]: result};
    case 'EXPENSE_UPDATE':
      return state;
    case 'EXPENSE_DESTROY':
      categoryID = payload.categoryID;
      category = state[categoryID];
      let newState = category.filter(section => section.id != payload.id);
      return {...state, [categoryID]:newState};
    default:
      return state;
  }
}