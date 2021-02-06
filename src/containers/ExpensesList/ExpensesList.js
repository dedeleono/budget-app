import React from 'react';

const ExpensesList = (props) => {

    return(
        <>
        <div>
            <h5>Expenses list mf</h5>
            <table>
            <tr>
                <th>Expense title</th>
                <th>Quantity Wasted</th>
            </tr>
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        </table>
        </div>
        </>
    )
};

export default ExpensesList;