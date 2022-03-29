import React, { useContext } from 'react';
import TransactionBox from './TransactionBox'
import TransactionStyles from './Transactions.module.scss';
import { GlobalContext } from '../context/GlobalContext';

function Transactions() {
  const { data } = useContext(GlobalContext);
  
  return (
    <>
    <div className={TransactionStyles.main}>
        <div className={TransactionStyles.header}>
          <h3>Transactions</h3>
          <a href="">See all</a>
        </div>
        <div className={TransactionStyles.content}>
          {data.transactions.map(transaction => (<TransactionBox key={transaction.id} transactions={transaction}/>)
            )}
        </div>
    </div>
    </>
  )
}

export default Transactions;