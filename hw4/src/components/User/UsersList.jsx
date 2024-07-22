import React from "react";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  return (
    <div className="container">
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
