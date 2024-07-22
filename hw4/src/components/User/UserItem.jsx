import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <li>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  );
};

export default React.memo(UserItem);
