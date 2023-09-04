import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  background-color: black;
  border-radius: 4px;
  padding: 30px;
  width: 300px;
  margin: 20px auto;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;

`;

export const Name = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin: 5px 0;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 5px 0;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 5px 0;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-right: 20px; */
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: #fff;
  margin: 5px 0;
`;

export const StatQuantity = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin: 5px 0;
`;