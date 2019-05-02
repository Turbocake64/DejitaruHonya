// importing react and this jsx fron react
import React from "react";
//importing react-dom. Not sure what this does
import ReactDOM from "react-dom";
//importing App.js I assume for the sake of being readable to another file
import App from "./App";
//importing the registerServiceWorker which I believe is important for production
import registerServiceWorker from "./registerServiceWorker";

// rendering App as our root
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
