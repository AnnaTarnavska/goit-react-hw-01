import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendsList}>
            {friends.map((friend, id) => (
                <FriendListItem key={id} friend={friend}/>
            ))}
        </ul>
    );
};

export default FriendList;