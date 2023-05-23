import FriendsListItem from 'friendsListItem';
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

export default FriendList;
