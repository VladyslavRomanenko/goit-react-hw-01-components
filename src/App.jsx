import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/Friends';
import TransactionHistory from './components/Transactions/Transactions';
import user from './data/user.json';
import data from './data/data.json';
import transactions from './data/transactions.json';
import friends from './data/friends.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
