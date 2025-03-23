import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";


const TransactionHistory = ({ items }) => {
    
    
    return (
        <table className={styles.table}>
            <thead className={styles.tableTop}>
                <tr className={styles.Colum}>
                    <th className={styles.ColumName}>Type</th>
                    <th className={styles.ColumName}>Amount</th>
                    <th className={styles.ColumName}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    return (
                        <TransactionHistoryItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory;