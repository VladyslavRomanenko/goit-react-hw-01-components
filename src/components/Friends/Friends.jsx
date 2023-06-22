import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import './Friends.css';
const FriendList = ({ items }) => {
  return (
    <div className="friends-container">
      <ul className="friend-list">
        {items.map(item => (
          <FriendsListItem
            key={item.id}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendsListItem.propTypes = {
  id: PropTypes.number,
};

export default FriendList;
