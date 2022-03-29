import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import IEStyles from './IncomeExpense.module.scss';

function IncomeExpense() {

  const { data } = useContext(GlobalContext)
  // First let's map each transaction

  const amounts = data.transactions.map((transaction) => transaction.amount);

  //To calculate the total we use the JavaScript Reduce Function, which has an accumulator,
  //that records the previous returned value and we add that previous value to the current value

  const total = amounts.reduce((acc, amount) => acc + amount, 0).toFixed(2);
  console.log(total);
  

  return (
    <div className={IEStyles.main}>
        <div className={IEStyles.income}>
            <i className='bi bi-arrow-up-circle-fill'></i>
            <span>
                <label><p>Total Income</p></label>
                <h4>${total}</h4>
            </span>
        </div>

        <div className={IEStyles.expense}>
            <i className='bi bi-arrow-down-circle-fill'></i>
            <span>
                <label><p>Total Expense</p></label>
                <h4>$30,000.34</h4>
            </span>
        </div>
    </div>
  )
}

export default IncomeExpense