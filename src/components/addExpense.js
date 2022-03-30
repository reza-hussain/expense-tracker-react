import React, { useState } from 'react';
import addStyles from './addExpense.module.scss';

function AddExpense() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  
  return (
    <div className={addStyles.addExpense}>
        <form className={addStyles.main}>
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
        </form>
    </div>
  )
}

export default AddExpense;