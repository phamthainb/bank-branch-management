import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bank from "./containers/Bank";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Onboarding from "./containers/Onboarding";
import GlobalLoadingScreen from "./common/components/GlobalLoadingScreen";
import MyProvider from "./common/context";

import "./app.css";
import "antd/dist/antd.css";
import Profile from "./containers/Bank/Profile";

export default function App() {

  return (
    <MyProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Onboarding />
          </Route>
          <Route path="/bank" exact>
            <Bank />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </Router>
      <GlobalLoadingScreen />
    </MyProvider>
  );
}
