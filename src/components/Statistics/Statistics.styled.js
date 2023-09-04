import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #666;
`;

