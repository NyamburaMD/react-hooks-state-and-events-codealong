import React from "react";

function Toggle() {
  function handleClick() {
    console.log("On");
  }
  return <button onClick={handleClick}>OFF</button>;
}

export default Toggle;
