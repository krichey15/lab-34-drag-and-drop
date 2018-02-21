export const expense_create = expense => ({
  type: 'EXPENSE_CREATE',
  expense

})

export const expense_update = (expense) => {
  return {
    type: 'EXPENSE_UPDATE',
    expense
  }
}

export const expense_destroy = expense => {
  return {
    type: 'EXPENSE_DESTROY',
    expense
  }
}

export const expense_toggle = expense => {
  return {
    type: 'EXPENSE_TOGGLE',
    expense
  }
}

export const expense_move = (expense, categoryID) => ({
  type: 'EXPENSE_MOVE',
  payload: {expense, categoryID}
})
