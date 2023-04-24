import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.line}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
