import Profile from '../components/Profile/Profile.jsx';
import user from '../components/data/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        tag={user.tag}
        loccation={user.loaction}
        stats={user.stats}
      />
    </div>
  );
};
