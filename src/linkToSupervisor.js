import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Supervisors from "./supervisors";

const LinkToSupervisor = () => (
  <Switch>
    <Route exact path="/supervisors" component={Supervisors} />
  </Switch>
);

export default LinkToSupervisor;
