// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component

const App = function() {
  return (
    <div>
      Hi there!
      <div>Yep its working fine now</div>
    </div>
  );
};

//T Take the react component and show it on the browser
ReactDOM.render(<App />, document.querySelector("#root"));
