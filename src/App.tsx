import * as React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Graph } from "./pages/Graph";

export function App(): React.ReactElement {
  return <Router>
    <Switch>
      <Route path="/" exact={true} component={Graph} />
    </Switch>
  </Router>
}