import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./supervisors.css";

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
                    Log out
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
                <a href="#">
                  <i class="fa fa-dashboard" /> Profile
                </a>
              </li>
              <li className="itemList">
                <a href="#">
                  <i class="fa fa-tags" /> Dashboard
                </a>
              </li>
              <li className="itemList">
                <a href="#">
                  <i class="fa fa-history" /> Reports
                </a>
              </li>
              <li className="itemList">
                <a href="#">
                  <i class="fa fa-lock" /> Classes
                </a>
              </li>
              <li className="itemList">
                <a href="#">
                  <i class="fa fa-lock" /> People
                </a>
              </li>
              <li className="itemList">
                <a href="#">
                  <i class="fa fa-lock" /> Payroll
                </a>
              </li>
              <li className="itemList">
                <a href="#">
                  <i class="fa fa-lock" /> Calender
                </a>
              </li>
              <li className="itemList">
                <a href="#">
                  <i class="fa fa-lock" /> inbox
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <a href="#">
              <strong>
                <span class="fa fa-dashboard" /> My Daaa
              </strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Supervisers;
