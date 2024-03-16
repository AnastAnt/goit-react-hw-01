import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div>
        <img src={image} alt="User avatar" />
        <p>
          <strong>{name}</strong>
        </p>
        <p className={styles.pOpac}>@{tag}</p>
        <p className={styles.pOpac}>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>
            <strong>{followers}</strong>
          </span>
        </li>
        <li>
          <span>Views</span>
          <span>
            <strong>{views}</strong>
          </span>
        </li>
        <li>
          <span>Likes</span>
          <span>
            <strong>{likes}</strong>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
