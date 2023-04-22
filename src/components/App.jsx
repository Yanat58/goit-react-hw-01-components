import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';

import { FriendList } from 'components/Friends/FriendList/FriendList';
import friends from 'components/Friends/friends.json';

export const App = () => {
  return (
    <div
    // style={{
    //   // height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};
