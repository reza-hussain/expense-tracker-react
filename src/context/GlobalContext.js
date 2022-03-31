import React, { createContext, useReducer } from 'react' ;
import AppReducer from './AppReducer'

const initialState = {
    data:
        {
            name: 'Reza Hussain',
            card: '576 9837 7638 1636',
            balance: '$2890',
            transactions: [
                {id: 1, text: 'Smartphone', amount: -200},
                {id: 1, text: 'Book', amount: 300},
                {id: 1, text: 'Flower', amount: -20},
                {id: 1, text: 'Camera', amount: 150},]
        }
}
//Create Context
export const GlobalContext = createContext(initialState);

//Create provider

export const GlobalProvider = ({children}) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{
            data:state.data,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}