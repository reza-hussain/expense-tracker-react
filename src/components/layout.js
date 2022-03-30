import React from 'react';
import Card from './Card';
import AddExpense from './addExpense';
import Header from './Header';
import IncomeExpense from './IncomeExpense';
import LayoutStyles from './layout.module.scss';
import Transactions from './Transactions';

function Layout() {
  return (
    <div className={LayoutStyles.layout}>
        <Header />
        <Card />
        <IncomeExpense />
        <Transactions />
    </div>
  )
}

export default Layout
