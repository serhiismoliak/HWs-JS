const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className="inline-flex flex-col items-center border-1 border-black rounded-sm p-2.5 gap-0.5">
      <img src={avatar} alt="Avatar" width="48" />
      <p className="">{name}</p>
      <p className="text-xs" style={{color: isOnline ? 'green' : 'red'}}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
};
export default FriendListItem;
