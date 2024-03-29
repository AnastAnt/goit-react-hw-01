import styles from "./TransactionHistory.module.css"; // імпорт стилів
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.heading}>Type</th>
          <th className={styles.heading}>Amount</th>
          <th className={styles.heading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.data}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </td>
            <td className={styles.data}>{amount}</td>
            <td className={styles.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
