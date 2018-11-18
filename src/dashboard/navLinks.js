import React from "react";
import Reports from "./reports";
import Profile from "./profile";
import Dashboard from "./dashboard";
import Classes from "./classes";
import People from "./people";
import Payroll from "./payroll";
import Calendar from "./calendar";
import Inbox from "./inbox";
import { Switch, Route } from "react-router-dom";

const NavLinks = () => (
  <Switch>
    <Route path="/profile" component={Profile} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/reports" component={Reports} />
    <Route path="/classes" component={Classes} />
    <Route path="/people" component={People} />
    <Route path="/payroll" component={Payroll} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/inbox" component={Inbox} />
  </Switch>
);
export default NavLinks;
