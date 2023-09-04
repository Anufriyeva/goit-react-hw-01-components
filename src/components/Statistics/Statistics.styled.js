import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  background-color: #000;
  border-radius: 4px;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`;

export const StatList = styled.ul`
display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #fff;
`;

