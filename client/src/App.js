// importing react /jsx
import React from "react";
// deconstructing BrowserRouter as Router from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//importing home.js to be renderable in App
import Home from "./pages/Home";
//importing saved.js to be renderable in App
import Saved from "./pages/Saved";
//importing noMatch.js to be renderable in App
import NoMatch from "./pages/NoMatch";
// importing the navbar component
import Nav from "./components/Nav";

function App() {
  return (
    // our BrowserRouter
    <Router>
      {/* all components must be within a greater div. This is that div */}
      <div>
        {/* calling our navbar component */}
        <Nav />
        {/* This switch is allowing the Router to switch between the root route and the /saved route  */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


// exporting App
export default App;
