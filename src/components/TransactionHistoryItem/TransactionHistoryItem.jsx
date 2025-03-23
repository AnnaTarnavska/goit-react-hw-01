import styles from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <tr className={styles.itemList}>
            <td className={styles.item}>{type}</td>
            <td className={styles.item}>{amount}</td>
            <td className={styles.item}>{currency}</td>
        </tr>
    );
};

export default TransactionHistoryItem;