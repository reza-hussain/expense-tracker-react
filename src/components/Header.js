import React, { useState } from 'react';
import AddExpense from './addExpense';
import HeaderStyles from './Header.module.scss';

function Header() {
  const [open, isOpen] = useState(false);

  return (
    <>
    <div className={HeaderStyles.main}>
        <h1>Walencia</h1>
        <i className="bi bi-plus-circle-fill" onClick={() => isOpen(!open)}></i>
    </div>
    {open && <AddExpense />}
    </>
  )
}

export default Header