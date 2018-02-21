import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

import * as category_actions from '../src/actions/category-action';
import * as expense_actions from '../src/actions/expense-action';

test('Tesing all categories', () => {
  let all_action_categories = [
    'category_create',
    'category_update',
    'category_delete',
    'category_toggle'
  ];

  let all_action_expenses = [
    'expense_create',
    'expense_update',
    'expense_destroy',
    'expense_toggle'
  ];

  all_action_categories.forEach(action => {
    expect(category_actions[action]({}).type).toEqual(action.toUpperCase());
  });

  all_action_expenses.forEach(action => {
    expect(expense_actions[action]({}).type).toEqual(action.toUpperCase());
  });

});
