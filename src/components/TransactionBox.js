import React, { useContext } from 'react';
import TransactionBoxStyles from './TransactionBox.module.scss';

function TransactionBox({transactions}) {
  const sign = transactions.amount < 0 ? '-' : '+';

  return (
    <div className={TransactionBoxStyles.main}>
      <div className={TransactionBoxStyles.left}>
        <i className="bi bi-facebook"></i>
        <div>
          <label>{transactions.text}</label>
          <p>05/05/2002</p>
        </div>
      </div>
      <div className={TransactionBoxStyles.right}>
        <h4 className={sign === '-' ? 'expense':'income'}>{sign}${Math.abs(transactions.amount)}</h4>
      </div>
    </div>
  )
}

export default TransactionBox;