import React from 'react';
import HeaderStyles from './Header.module.scss';

function Header() {
  return (
    <div className={HeaderStyles.main}>
        <h1>Walencia</h1>
        <i className="bi bi-plus-circle-fill"></i>
    </div>
  )
}

export default Header