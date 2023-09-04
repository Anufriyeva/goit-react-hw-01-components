import React from 'react';
import PropTypes from 'prop-types';
import {
    FriendListItemWrapper,
    Status,
    Avatar,
    Name,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendListItemWrapper>
    <Status $isOnline={isOnline} />
    <Avatar src={avatar} alt={`${name}'s avatar`} />
    <Name>{name}</Name>
  </FriendListItemWrapper>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;


