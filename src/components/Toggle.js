import React, { useState } from "react"; //import state hook

function Toggle() {
  const [isOn, setIsOn] = useState(false); //initial state and using state var

  function handleClick() { //handleClick callback
    setIsOn((isOn) => !isOn); //update using setter function
  }

  const color = isOn ? "red" : "white" //conditional rendering for whether the button comes out red or white

  return (
  <button style={{background: color}} onClick={handleClick}>
    {isOn ? "ON" : "OFF"}
    </button> //conditional rendering
    );
}

export default Toggle;
