import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    
    const { followers, views, likes } = stats;
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.userImg} src={image} alt="avatar" width={200} />
                <p className={styles.userName}>{name}</p>
                <p className={styles.userTag}>@{tag}</p>
                <p className={styles.userLocation}>{location}</p>
            </div>
            <ul className={styles.userStat}>
                <li className={styles.statItem}>
                    <span className={styles.userStatInfo}>Followers</span>
                    <span className={styles.statInfoNum}>{followers}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.userStatInfo}>Views</span>
                    <span className={styles.statInfoNum}>{views}</span>
                </li>
                <li className={styles.statItem}>
                    <span className={styles.userStatInfo}>Likes</span>
                    <span className={styles.statInfoNum}>{likes}</span>
                </li>
            </ul>
        </div>

    );
};

export default Profile;