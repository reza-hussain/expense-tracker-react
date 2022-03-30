import React, { useContext } from 'react';
import TransactionBoxStyles from './TransactionBox.module.scss';
import { GlobalContext } from '../context/GlobalContext';

function TransactionBox({transactions}) {
  const sign = transactions.amount < 0 ? '-' : '+';

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className={TransactionBoxStyles.main}>
      <div className={TransactionBoxStyles.delete}>
        <i className='bi bi-trash-fill'
        onClick={() => deleteTransaction(transactions.id)}></i></div>
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