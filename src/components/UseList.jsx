import React from "react";
import DisplayUsers from "./DisplayUsers";

function UseList(props) {
  return (
    <div>
      {props.users.map((user) => {
        return <DisplayUsers key={user.id} user={user} />;
      })}
    </div>
  );
}

export default UseList;
