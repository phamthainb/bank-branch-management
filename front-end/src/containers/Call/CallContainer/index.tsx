import React from "react";
import { Route, Switch } from "react-router";
import MainCallContainer from "./MainCallContainer";
import NoCallSelected from "./NoCallSelected";

export default function CallContainer() {
  return (
    <Switch>
      <Route path='/c' exact>
        <NoCallSelected />
      </Route>
      <Route path='/c/:id' exact>
        <MainCallContainer />
      </Route>
    </Switch>
  )
}
