import React from "react";
import Overview from "./Overview";
import Studentview from "./Studentview";
import "./Overview.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Overview">Overview</Link>
            </li>
            <li>
              <Link to="/Studentview">Studentview</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/Overview">
              <Overview />
            </Route>
            <Route path="/Studentview">
              <Studentview />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// div className="App">
//       <h1>Student Dashboard</h1>
//       <Overview />
//     </div>
//   );

export default App;
