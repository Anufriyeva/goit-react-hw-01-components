import styled from 'styled-components';

export const FriendListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;