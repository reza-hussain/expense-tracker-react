import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import CardStyles from './Card.module.scss'

export default function Card() {
  const { state } = useContext(GlobalContext);
  
  return (
    <div className={CardStyles.main}>
        <div className={CardStyles.card}>
            <div className={CardStyles.name}>
                <div>
                    <p>Card Name</p>
                    <h4>{state.name}</h4>
                </div>
                <i className="bi bi-apple"></i>
            </div>

            <div className={CardStyles.number}>
                <h4>{state.card}</h4>
            </div>
            
            <div className={CardStyles.balance}>
                <p>Card Balance</p>
                <h4>{state.balance}</h4>
            </div>
        </div>
    </div>
  )
}
