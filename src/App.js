import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Brand from "./Components/Brand";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/:brand">
            <Brand />
          </Route>
          <Route path="/">Use Menu or Direct link to route in Component with params</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
