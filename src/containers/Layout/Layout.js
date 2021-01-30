import React, { useState, useRef } from 'react';
import styles from './Layout.module.css';
import Budget from '../../components/Budget/Budget';
import Expenses from '../../components/Expenses/Expenses';
import Results from '../../components/Results/Results';

const Layout = () => {

    const [state, setState] = useState({
        budget: 0,
        expense: 0,
        balance: 0,
    });

    const [inputState, setInputState] = useState(0);

    const inputRef = useRef(null);

    /*const budgetAdd = () => {
        const newState = {...state}
        const newBudget = inputState;
        newState.budget = newBudget;
        setState(newState);
    }*/

    const budgetAdd = () => {
        const newState = {...state}
        const newBudget = inputRef.current.value;
        newState.budget = newBudget;
        setState(newState);
    };

    const expenseAdd = (event) => {
        const newState = {...state}
        const newExpense = event.target.value;
        newState.expense = newExpense;
        setState(newState);
    };

    const setInputValue = (event) => {
        setInputState(event.target.value);
    };

    return(
        <>
            <div className={styles.title}>Budget App</div>
            <div>
                <Budget 
                    budget={budgetAdd}
                    input={setInputValue}
                    inputRef={inputRef}
                />
                <Expenses 
                    expense={expenseAdd}
                />
            </div>
            <div className={styles.results}>
                <Results 
                    bdget={state.budget}
                    expenses={state.expense}
                />
            </div>
        </>
        )
}

export default Layout;