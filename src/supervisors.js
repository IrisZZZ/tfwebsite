import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./supervisors.css";
import NavLinks from "./dashboard/navLinks";
import { Link } from "react-router-dom";

class Supervisers extends Component {
  render() {
    return (
      <div>
        <div col-lg-12 col-md-12 col-sm-12 col-xs-12>
          <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="navbar-collapse collapse w-100 order-1 order-md-2 dual-collapse2" />
            <div class="mx-auto order-0">
              <a class="navbar-brand mx-auto" href="#">
                Dashboard
              </a>
            </div>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Admin
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <button onClick={this.props.Finish}>Log out</button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <ul>
              <li class="nav-header" />
              <li className="itemList">
                <Link to="/profile">
                  <i class="fa fa-dashboard" /> Profile
                </Link>
              </li>
              <li className="itemList">
                <Link to="/dashboard">
                  <i class="fa fa-tags" /> Dashboard
                </Link>
              </li>
              <li className="itemList">
                <Link to="/reports">
                  <i class="fa fa-history" /> Reports
                </Link>
              </li>
              <li className="itemList">
                <Link to="/classes">
                  <i class="fa fa-lock" /> Classes
                </Link>
              </li>
              <li className="itemList">
                <Link to="/people">
                  <i class="fa fa-lock" /> People
                </Link>
              </li>
              <li className="itemList">
                <Link to="/payroll">
                  <i class="fa fa-lock" /> Payroll
                </Link>
              </li>
              <li className="itemList">
                <Link to="/calendar">
                  <i class="fa fa-lock" /> Calender
                </Link>
              </li>
              <li className="itemList">
                <Link to="/inbox">
                  <i class="fa fa-lock" /> Inbox
                </Link>
              </li>
            </ul>
          </div>

          <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <a href="#">
              <strong>
                <span class="fa fa-dashboard" /> <NavLinks />
              </strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Supervisers;
