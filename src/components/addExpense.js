import React, { useState, useContext } from 'react';
import addStyles from './addExpense.module.scss';
import { GlobalContext } from '../context/GlobalContext';

function AddExpense() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault()
    // The new transaction variable generates a random number as ID and stores the 
    // current event text and event amount into it.
    const newTransaction = { // variable is an OBJECT that's why we use curly braces {}
      id: Math.floor(Math.random()*10000000),
      text: text,
      amount: +amount //Alternative to parse-int. This is important because in the IncomeExpense Component
      // the transaction.amount is added as a string.
    }

     // The add transaction takes this new transaction as a new object and stores it into the transactions state array
    addTransaction(newTransaction);
  }
  
  return (
    <div className={addStyles.addExpense}>
        <form onSubmit={onSubmit} className={addStyles.main}>
            <div className={addStyles.text}>
                Enter Income/Expense:
                <input id="text" type="text" value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Computer..."/>
            </div>
            <div className={addStyles.number}>
                Amount:
                <input id="number" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className={addStyles.submit}>{amount < 0 ? 'Add Expense' : 'Add Income'}</button>
        </form>
    </div>
  )
}

export default AddExpense;