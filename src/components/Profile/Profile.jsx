import React from 'react';
import PropTypes from 'prop-types';
import defaultUser from '../../img/defaultUser.webp';
import {
    ProfileWrapper,
    DescriptionWrapper,
    Avatar,
    Name,
    Tag,
    Location,
    StatsList,
    StatItem,
    StatLabel,
    StatQuantity,
} from './Profile.styled';


const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <DescriptionWrapper>
        <Avatar src={avatar || defaultUser} alt={`${username}'s avatar`} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionWrapper>
      <StatsList>
        {Object.entries(stats).map(([label, quantity]) => (
          <StatItem key={label}>
            <StatLabel>{label}</StatLabel>
            <StatQuantity>{quantity}</StatQuantity>
          </StatItem>
        ))}
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

Profile.defaultProps = {
    avatar: defaultUser,
};

export default Profile;