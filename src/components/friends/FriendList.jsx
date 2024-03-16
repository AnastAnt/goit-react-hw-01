import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css"; // імпортуємо стилі

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {" "}
      {/* застосовуємо стилі */}
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
