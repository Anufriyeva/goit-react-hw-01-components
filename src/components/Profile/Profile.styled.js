import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 50px;
  width: 300px;
  margin: 20px auto;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

export const StatQuantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
`;