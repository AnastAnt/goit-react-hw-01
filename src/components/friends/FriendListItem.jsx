import styles from "./FriendListItem.module.css"; // імпортуємо стилі

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      {" "}
      {/* застосовуємо стилі */}
      <img
        className={styles.friendAvatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p>{name}</p>
      <p
        className={`${styles.friendStatus} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
