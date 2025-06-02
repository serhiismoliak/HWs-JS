const Profile = ({name, tag, location, avatar, stats}) => {
  return (
    <div className="rounded-md border-black border-1 bg-neutral-50 overflow-auto w-48">
      <div className="p-1.5 flex items-center flex-col">
        <img
          className="rounded-full bg-zinc-800 size-16"
          src={avatar}
          alt="User avatar"
        />
        <p className="py-1.5 text-black font-semibold text-sm">{name}</p>
        <p className="text-gray-500 text-xs mb-0.5">@{tag}</p>
        <p className="text-gray-500 text-xs">{location}</p>
      </div>

      <ul className="grid grid-cols-3 divide-x-1 divide-neutral-500 bg-neutral-300 border-t-1 border-neutral-500">
        <li className="flex flex-col items-center p-1.5 text-xs">
          <span>Followers</span>
          <span className="font-semibold">{stats.followers}</span>
        </li>
        <li className="flex flex-col items-center p-1.5 text-xs">
          <span>Views</span>
          <span className="font-semibold">{stats.views}</span>
        </li>
        <li className="flex flex-col items-center p-1.5 text-xs">
          <span>Likes</span>
          <span className="font-semibold">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
