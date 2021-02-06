import React, { useState, useRef } from 'react';
import styles from './Layout.module.css';
import Budget from '../../components/Budget/Budget';
import Expenses from '../../components/Expenses/Expenses';
import Results from '../../components/Results/Results';
import ExpensesList from '../../containers/ExpensesList/ExpensesList';

const Layout = () => {

    const [state, setState] = useState({
        budget: 0,
        oldValue: 0,
        expense: 0,
        balance: 0,
    });

    const [textState, setTextState] = useState([]);
    const [valueState, setValueState] = useState([]);

    /*const [inputState, setInputState] = useState(0);*/

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    /*const budgetAdd = () => {
        const newState = {...state}
        const newBudget = inputState;
        newState.budget = newBudget;
        setState(newState);
    }*/

    const budgetAdd = () => {
        const newState = {...state}
        const newBudget = inputRef1.current.value;
        newState.budget = newBudget;
        setState(newState);
    };

    /*const expenseAdd = (event) => {
        const newState = {...state}
        const newExpense = event.target.value;
        newState.expense = newExpense;
        setState(newState);
    };*/

    const expenseAdd = () => {
        const newState = {...state}
        const oldExpense = state.expense;
        const newExpense = inputRef2.current.value;
        newState.oldValue = oldExpense;
        newState.expense = Number(newExpense) + Number(oldExpense);
        setState(newState);
    };

    const textAdd = () => {
        setTextState(prevText => {
            return [...prevText, state.text]
        })
    }

    const valueAdd = () => {
        setValueState(prevValue => {
            return [...prevValue, state.expense]
        })
    }

    const addUp = () => {
        expenseAdd();
        textAdd();
        valueAdd();
    }
    /*const setInputValue = (event) => {
        setInputState(event.target.value);
    };*/

    return(
        <>
        <div className={styles.title}>Budget App</div>
        <div className={styles.mainContainer}>
            <div className={styles.inputs}>
                <Budget 
                    budget={budgetAdd}
                    /*input={setInputValue}*/
                    inputRef={inputRef1}
                />
                <Expenses 
                    expense={addUp}
                    inputRef={inputRef2}
                    inputText={inputRef3}
                />
            </div>
            <div className={styles.results}>
                <Results 
                    bdget={state.budget}
                    expenses={state.expense}
                />
                <div>
                <ExpensesList
                    value = {expItemState.value}
                    text = {expItemState.text}
                />
                </div>
            </div>
        </div>
        </>
        )
}

export default Layout;