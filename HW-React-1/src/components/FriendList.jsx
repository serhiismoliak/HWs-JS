import FriendListItem from "./FriendListItem.jsx"
const FriendList = ({friends=[], className, ...props}) => {
    return (
        <ul className={`flex flex-row gap-2 ${className}`} {...props}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} {...friend}/>
            ))}
        </ul>
    )
}
export default FriendList