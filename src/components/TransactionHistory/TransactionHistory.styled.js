import styled from 'styled-components';

export const TransactionHistoryWrapper = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin: 20px auto;
  text-align: left;
`;

export const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

export const TableHeaderRow = styled.tr`
  text-align: left;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;