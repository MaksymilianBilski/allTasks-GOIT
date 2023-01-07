import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          src={friend.src}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export { FriendList };
