import React from 'react';
import PropTypes from 'prop-types';
import {
    TransactionHistoryWrapper,
    TableHeader,
    TableHeaderRow,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
  <TransactionHistoryWrapper className="transaction-history">
    <TableHeader>
      <TableHeaderRow>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Amount</TableHeaderCell>
        <TableHeaderCell>Currency</TableHeaderCell>
      </TableHeaderRow>
    </TableHeader>
    <TableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <TableCell>{type}</TableCell>
          <TableCell>{amount}</TableCell>
          <TableCell>{currency}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </TransactionHistoryWrapper>
);

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