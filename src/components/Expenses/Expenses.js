import React from 'react';
import styles from './Expenses.module.css';

const Expenses = (props) => {
    return(
        <>
        <div className={styles.container}>
            <div>
                <h1>How much you wasting bruh?</h1>
                <input type="text" placeholder="what did you do?" onChange></input>
            </div>
            <div>
                {/*<input type="text" placeholder="how much you wasted man" onChange={props.expense}></input>*/}
                <input type="text" placeholder="how much you wasted man" ref={props.inputRef}></input>
            </div>
            <button onClick={props.expense}>Add Expense</button>
        </div>
    </>
    )
}

export default Expenses;