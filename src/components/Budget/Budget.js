import React from 'react';
import styles from './Budget.module.css'

const Budget = (props) => {
    return(
        <>
            <div className={styles.container}>
                <h1>What's your budget?</h1>
                {/*<input type="text" placeholder="how much you have bruh" onChange={props.input}/>*/}
                <input type="text" id="budget" placeholder="how much you have bruh" ref={props.inputRef}></input>
                <br></br>
                <button onClick={props.budget}>Calculate</button>
            </div>
        </>
    )
}

export default Budget;