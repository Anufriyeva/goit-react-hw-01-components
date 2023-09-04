import React from 'react';
import PropTypes from 'prop-types';
import { FriendListWrapper } from './FriendList.styled';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <FriendListWrapper>
    {friends.map(({ id, ...friend }) => (
      <FriendListItem key={id} {...friend}/>
    ))}
  </FriendListWrapper>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;