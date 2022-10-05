import React, { Suspense } from "react";

import {
  Route,
  withRouter,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/landingPage";
import ErrorPage from "./pages/error";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <div>
      <Suspense fallback={<div classNameName="loading" />}>
        <Router>
          <Switch>
            <Route path={`/`} exact render={(props) => <Home {...props} />} />
            <Route
              path="/create"
              exact
              render={(props) => <CreateEventPage {...props} />}
            />
            <Route
              path="/event"
              exact
              render={(props) => <EventPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}
export default App;
