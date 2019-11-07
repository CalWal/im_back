// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component

const App = function() {
  const buttonText = "Click Me!";
  const buttonStyle = { backgroundColor: "blue", color: "white" };

  function getTime() {
    return new Date().toLocaleTimeString();
  }
  return (
    <div>
      <h1>The time is {getTime()}</h1>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={buttonStyle}>{buttonText}</button>
    </div>
  );
};

//T Take the react component and show it on the browser
ReactDOM.render(<App />, document.querySelector("#root"));
