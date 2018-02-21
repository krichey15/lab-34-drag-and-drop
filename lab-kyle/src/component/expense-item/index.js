import './expense-item.scss';
import React from 'react';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='expense-item'>
        {this.props.expenses[this.props.categoryID].map((expense,i) => 
          <div key={expense.id}>
            <p> {(expense.name)} </p>
            <button onClick={() => this.props.expenseDelete(expense)}> x </button>
          </div>
        )}
      </div>
    );
  }
};

export default ExpenseItem;
