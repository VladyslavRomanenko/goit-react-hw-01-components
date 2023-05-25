import PropTypes from 'prop-types';
const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friends-item">
      <span className={`status ${isOnline ? 'green' : 'red'}`} />
      <img
        className="friends-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friends-name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsListItem;
