import React from "react";

export default ({ data }) => {
  console.log(data);
  const lists = data.map(user => (
    <li key={user.id}>
      <h2>
        {user.name} <small>{user.username}</small>
      </h2>
      <p>{user.email}</p>
    </li>
  ));
  return <ul className="dropdown">{lists}</ul>;
};
