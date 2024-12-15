import React from "react";

function DisplayUsers({ user }) {
  return (
    <div className="border border-red-500 grid gap-1 m-3 p-2">
      <h1>
        <strong>Name: </strong>
        {user.name}
      </h1>
      <h4>
        <strong>Username: </strong>
        {user.username}
      </h4>
      <p>
        <strong>City: </strong>
        {user.address.city}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
    </div>
  );
}

export default DisplayUsers;
