import React from "react";

function Task8({ isSuccess }) {
  return <div>{isSuccess ? <p>Error!</p> : <p>Success!</p>}</div>;
}
export default Task8;
