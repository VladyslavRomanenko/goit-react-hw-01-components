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

export default FriendsListItem;
