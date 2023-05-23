import Profile from "profile";
import Statistics from "statistics";
import FriendList from "friends";
import user from '../json/user.json'
import data from '../json/data.json'
// import transactions from '../json/transactions.json'
import friends from '../json/friends.json'

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
    </div>
  )
}
 export default App;