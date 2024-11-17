const UserMark = ({ name }) => {
  const displayName = name ? name : 'Unknown User';
  return (
    <span>
      by <mark className="text-[16px] font-bold">{displayName}</mark>
    </span>
  );
};

export default UserMark;