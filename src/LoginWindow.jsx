import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

import LinkToSupervisor from "./linkToSupervisor";
import { Link } from "react-router-dom";

class LoginWindow extends Component {
  state = {
    stdSignIn: false,
    stdSignUp: false,
    ttSignIn: false,
    ttdSignUp: false
  };

  render() {
    return (
      <div>
        <div className="container login-container">
          <nav className="navbar navbar-default tfnav">
            Tutor Force
            <Link to="/supervisors">supervisors</Link>
          </nav>
          <LinkToSupervisor />
          <div className="row">
            <div className="col-md-5 col-sm-10 login-form-1 ">
              <h3>Student Login</h3>

              <div className="form-group">
                <label for="stdId">Student ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Student Id"
                  id="studentId"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="stdMajor">Major</label>
                <select class="form-control" id="stdMajor">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stdClass">Class</label>
                <select class="form-control" id="stdClass">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stdReason">Reason</label>
                <select class="form-control" id="stdReason">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <div className="form-group">
                <button type="submit" class="btnSubmit" value="">
                  Check in
                </button>
                <button type="submit" className="btnSubmit" value="Login">
                  Sign Up
                </button>
              </div>
              <div className="form-group" />
            </div>
            <div className="col-md-2" />
            <div className="col-md-5 col-sm-10 login-form-2">
              <h3>Tutor Login</h3>
              <div className="form-group">
                <label for="tutorId">Tutor ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Tutor Id"
                  id="tutorId"
                  value=""
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btnSubmit" value="Login">
                  Clock In
                </button>
                <button type="submit" className="btnSubmit" value="Login">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginWindow;
