import React from "react";

function Task7({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p></p> : <p>Welcome Back!</p>}</div>;
}
export default Task7;
