import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

import CategoryCreate from '../src/components/Category/CategoryCreate';
import ExpenseCreate from '../src/components/Expense/ExpenseCreate';

test('Test that our Category Create input sends input to state', () => {
  const component = shallow(<CategoryCreate />);
  component.find('#name').simulate('change', {
    target: {
      id: 'name',
      value: 'Test Category Content'
    }
  });

  expect(component.state('name')).toEqual('Test Category Content');
});

test('Test clicking on button works and triggers createCategory function', () => {
  const createCategorySpy = sinon.spy();

  const component =
  shallow(<CategoryCreate
    addCategory={createCategorySpy}
    />);

    component.find('button').simulate('click', {
      preventDefault: () => {}
    });

    expect(createCategorySpy.calledOnce).toEqual(true);
  });

  test('Test that our Expense Create input sends input to state', () => {
    const component = shallow(<ExpenseCreate />);
    component.find('#expense').simulate('change', {
      target: {
        id: 'expense',
        value: 'Test Expense Content'
      }
    });

    expect(component.state('expense')).toEqual('Test Expense Content');
  });

  test('Test clicking on button works and triggers createExpense function', () => {
    const createExpenseSpy = sinon.spy();

    const component =
    shallow(<ExpenseCreate
      createExpense={createExpenseSpy}
      />);

      component.find('button').simulate('click', {
        preventDefault: () => {}
      });

      expect(createExpenseSpy.calledOnce).toEqual(true);
    });
