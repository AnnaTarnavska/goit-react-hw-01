import styles from "./FriendListItem.module.css";

const FriendListItem = ({friend}) => {

    const { avatar, name, isOnline } = friend;

    return (
        <div className={styles.friendItem}>
            <img className={styles.friendAvatar} src={avatar} alt="Avatar" width="48" />
            <p className={styles.friendName}>{name}</p>
            <p className={isOnline ? styles.isOnline : styles.isOffline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default FriendListItem;