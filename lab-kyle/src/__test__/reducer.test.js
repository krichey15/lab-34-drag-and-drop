import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';

import newCategory from '../src/lib/newCategory';
import newExpense from '../src/lib/newExpense';
import { setState } from 'expect/build/jest_matchers_object';

import expenseReducer from '../src/reducers/expense-reducer';
import categoryReducer from '../src/reducers/category-reducer';

Enzyme.configure({ adapter: new Adapter() });

test('Test that CATEGORY_CREATE returns state with a new Category inside', () => {
  let brandNewCategory = newCategory("Our Testing Category", 10);

  let action = {type: 'CATEGORY_CREATE', category: brandNewCategory};

  let state = categoryReducer(state,action);

  expect(Object.keys(state).length).toEqual(1);
});

test('Test that CATEGORY_UPDATE updates the category name within state if the id matches', () => {
  let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
  let brandNewCategory2 = newCategory("Our Testing Category 2", 10);

  let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};

  let state = categoryReducer(state,action);

  action = {type: 'CATEGORY_CREATE', category: brandNewCategory2};
  state = categoryReducer(state, action);
  action = {
    type: 'CATEGORY_UPDATE',
    category: {
      id: brandNewCategory1.id,
      updatedContent: 'New Category 1 Text'
    }
  }
  state = categoryReducer(state, action);

  expect(state[brandNewCategory1.id].name).toEqual('New Category 1 Text');
});

test('Test that CATEGORY_DELETE removes a category from the state array', () => {
  let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
  let brandNewCategory2 = newCategory("Our Testing Category 2", 10);

  let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};

  let state = categoryReducer(state,action);

  action = {type: 'CATEGORY_CREATE', category: brandNewCategory2};
  state = categoryReducer(state, action);

  action = {
    type: 'CATEGORY_DELETE',
    category: brandNewCategory1.id
  }

  state = categoryReducer(state, action);
  expect(Object.keys(state).length).toEqual(1);

});

test('Test that toggling the updating status works. I am going to call this good for both toggle versions', () => {
  let brandNewCategory1 = newCategory("Our Testing Category 1", 10);

  let action = {type: 'CATEGORY_CREATE', category: brandNewCategory1};

  let state = categoryReducer(state,action);

  expect(brandNewCategory1.updating).toEqual(false);

  action = {
    type: 'CATEGORY_TOGGLE',
    category: brandNewCategory1.id
  };

  state = categoryReducer(state, action);

  expect(brandNewCategory1.updating).toEqual(true);
});

test('Adding an expense using EXPENSE_CREATE', () => {
  let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
  let brandNewExpense1 = newExpense({expense: 'Expense Name 1', categoryID: brandNewCategory1.id, cost:100});

  let action = {
    type: 'EXPENSE_CREATE',
    expense: brandNewExpense1
  };

  let state = expenseReducer(state,action);
  expect(Object.keys(state).length).toEqual(1);
});

test('Updating an expense using EXPENSE_UPDATE', () => {
  let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
  let brandNewExpense1 = newExpense({expense: 'Expense Name 1', categoryID: brandNewCategory1.id, cost:100});

  let action = {
    type: 'EXPENSE_CREATE',
    expense: brandNewExpense1
  };

  let state = expenseReducer(state,action);

  action = {
    type: 'EXPENSE_UPDATE',
    expense: {
      id: brandNewExpense1.id,
      updatedContent: 'New Text!'
    }
  }

  state = expenseReducer(state, action);
  expect(state[Object.keys(state)[0]].expense).toEqual('New Text!');

});

test('Using EXPENSE_DESTROY to delete an expense', () => {
  let brandNewCategory1 = newCategory("Our Testing Category 1", 10);

  let brandNewExpense1 = newExpense({expense: 'Expense Name 1', categoryID: brandNewCategory1.id, cost:100});
  let brandNewExpense2 = newExpense({expense: 'Expense Name 2', categoryID: brandNewCategory1.id, cost:100});

  let action = {
    type: 'EXPENSE_CREATE',
    expense: brandNewExpense1
  };

  let state = expenseReducer(state,action);


  action = {
    type: 'EXPENSE_CREATE',
    expense: brandNewExpense2
  };

  state = expenseReducer(state,action);
  
  expect(Object.keys(state).length).toEqual(2);

  action = {
    type: 'EXPENSE_DESTROY',
    expense: brandNewExpense2
  }

  state = expenseReducer(state,action);

  expect(Object.keys(state).length).toEqual(1);

});
