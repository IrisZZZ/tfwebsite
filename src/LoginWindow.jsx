import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

import LinkToSupervisor from "./linkToSupervisor";
import { Link } from "react-router-dom";

class LoginWindow extends Component {
  render() {
    return (
      <div>
        <div className="container login-container">
          <nav className="navbar navbar-default tfnav">
            <button onClick={this.props.Finish}>Tutor Force</button>
            {/* <Link onClick={this.props.supervisorLogin} to="/supervisors">
              supervisors
            </Link> */}
            <button onClick={this.props.supervisorLogIn}>Supervisors</button>
          </nav>
          <LinkToSupervisor />
          <div className="row">
            <div className="col-md-5 col-sm-10 login-form-1 ">
              <h3>Student</h3>

              <div className="form-group">
                <label for="stdId">ID NUMBER</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Student Id"
                  id="stdId"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="stdMajor">MAJOR</label>
                <select class="form-control" id="stdMajor">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stdClass">CLASS</label>
                <select class="form-control" id="stdClass">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stdReason">REASON FOR VISIT</label>
                <select class="form-control" id="stdReason">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <div className="form-group">
                <button
                  onClick={this.props.updateSLState}
                  type="submit"
                  class="btnSubmit"
                  value=""
                >
                  Check In
                </button>
                <p>
                  Don't have an account?
                  <button
                    onClick={this.props.updateSSUState}
                    type="submit"
                    className="btnSubmit btn-sm"
                    value="Login"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
              <div className="form-group" />
            </div>
            <div className="col-md-2" />
            <div className="col-md-5 col-sm-10 login-form-2">
              <h3>Tutor </h3>
              <div className="form-group">
                <label for="tutorId">ID NUMBER</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Tutor Id"
                  id="tutorId"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="tutorPassword">PASSWORD</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  id="tutorPassword"
                  value=""
                />
              </div>

              <div className="form-group">
                <button
                  onClick={this.props.updateTTLState}
                  type="submit"
                  className="btnSubmit"
                  value="Login"
                >
                  Clock In
                </button>
                <p>
                  Don't have an account?
                  <button
                    onClick={this.props.updateTTSUState}
                    type="submit"
                    className="btnSubmit btn-sm"
                    value="Login"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginWindow;
