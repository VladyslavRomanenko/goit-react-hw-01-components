import PropTypes from 'prop-types';
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="transaction-thead">
        <tr className="transaction-tr-thead">
          <th className="transaction-th">Type</th>
          <th className="transaction-th">Amount</th>
          <th className="transaction-th">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className="transaction-tr-tbody" key={item.id}>
            <td className="transaction-td-type">{item.type}</td>
            <td className="transaction-td-amount">{item.amount}</td>
            <td className="transaction-td-currency">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
