import styles from './Results.module.css';
import ExpensesList from '../../containers/ExpensesList/ExpensesList';

const Results = (props) => {

    return(
        <>
        <div>
            <div className={styles.container}>
                <h2 className={styles.titles}>Budget</h2>
                <h2 className={styles.titles}>Expenses</h2>
                <h2 className={styles.titles}>Balance/Avail</h2>
            </div>
            <div className={styles.containerN}>
                <h2 className={styles.titlesN}>{props.bdget}</h2>
                <h2 className={styles.titlesN}>{props.expenses}</h2>
                <h2 className={styles.titlesN}>{(props.bdget - props.expenses)}</h2>
            </div>
        </div>
        <ExpensesList
            v={props.value}
            t={props.text}
        />
        </>
    )
}

export default Results;