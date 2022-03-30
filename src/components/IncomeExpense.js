import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import IEStyles from './IncomeExpense.module.scss';

function IncomeExpense() {

  const { data } = useContext(GlobalContext)
  // First let's map each transaction

  const amounts = data.transactions.map((transaction) => transaction.amount);

  //To calculate the total we use the JavaScript Reduce Function, which has an accumulator,
  //that records the previous returned value and we add that previous value to the current value

  const total = amounts.reduce((acc, amount) => acc + amount, 0).toFixed(2); //We don't need this variable.
  console.log(total);

  // Income is obtained by filtering all the amounts that are greater than 0 and then using the reduce
  //function to calculate the sum.

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc,item) => acc + item, 0)
  .toFixed(2);

  //Export is obtained by filtering all the amounts that are less than 0 and using the reduce function
  //to calculate the sum. the *-1 is used to remove the negative sign.

  const expense = (amounts
  .filter(item => item < 0)
  .reduce((acc,item) => acc + item, 0)*-1)
  .toFixed(2);
  

  return (
    <div className={IEStyles.main}>
        <div className={IEStyles.income}>
            <i className='bi bi-arrow-up-circle-fill'></i>
            <span>
                <label><p>Total Income</p></label>
                <h4>${income}</h4>
            </span>
        </div>

        <div className={IEStyles.expense}>
            <i className='bi bi-arrow-down-circle-fill'></i>
            <span>
                <label><p>Total Expense</p></label>
                <h4>${expense}</h4>
            </span>
        </div>
    </div>
  )
}

export default IncomeExpense