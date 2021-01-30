import styles from './Results.module.css';

const Results = (props) => {
    return(
        <>
            <div className={styles.container}>
                <h2 className={styles.titles}>Budget</h2>
                <h2 className={styles.titles}>Expenses</h2>
                <h2 className={styles.titles}>Balance/Avail</h2>
            </div>
            <div className={styles.container}>
                <h2 className={styles.titles}>{props.bdget}</h2>
                <h2 className={styles.titles}>{props.expenses}</h2>
                <h2 className={styles.titles}>0</h2>
            </div>
        </>
    )
}

export default Results;