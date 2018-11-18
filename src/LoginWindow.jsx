import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./loginWindow.css";

import LinkToSupervisor from "./linkToSupervisor";
import { Link } from "react-router-dom";

class LoginWindow extends Component {
  render() {
    return (
      <div>
        <div className="container login-container">
          <nav className="navbar navbar-default tfnav">
            <button className="logo-button" onClick={this.props.Finish} />
            {/* <Link onClick={this.props.supervisorLogin} to="/supervisors">
              supervisors
            </Link> */}
            <button className="super-logo" onClick={this.props.supervisorLogIn}>
              Supervisor access
            </button>
          </nav>
          <LinkToSupervisor />
          <div className="row">
            <div className="col-lg-2 col-sm-0" />
            <div className="col-lg-4 col-md-6 col-sm-12 login-form-1  ">
              <div className="bk-box">
                <h3 className="margin-d-2">Student</h3>

                <div className="form-group">
                  <label className="label-styled" for="stdId">
                    ID NUMBER
                  </label>
                  <input
                    type="text"
                    className="form-control one-border input-border"
                    placeholder="Enter Your Student Id"
                    id="stdId"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label className="label-styled" for="stdMajor">
                    MAJOR
                  </label>
                  <select class="form-control one-border" id="stdMajor">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="form-group">
                  <label className="label-styled" for="stdClass">
                    CLASS
                  </label>
                  <select class="form-control one-border" id="stdClass">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="form-group">
                  <label className="label-styled" for="stdReason">
                    REASON FOR VISIT
                  </label>
                  <select class="form-control one-border" id="stdReason">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>

                <div className="form-group">
                  <button
                    onClick={this.props.updateSLState}
                    type="submit"
                    class="btnSubmit btn-styled"
                    value=""
                  >
                    Check In
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-0 " />
            <div className="col-lg-4 col-md-6 col-sm-12 login-form-2 ">
              <div className="bk-box">
                <h3 className="margin-d-2">Tutor </h3>
                <div className="form-group">
                  <label className="label-styled i" for="tutorId">
                    ID NUMBER
                  </label>
                  <input
                    type="text"
                    className="form-control one-border input-border"
                    placeholder="Enter Your Tutor Id"
                    id="tutorId"
                    value=""
                  />
                </div>
                <div className="form-group">
                  <label className="label-styled" for="tutorPassword">
                    PASSWORD
                  </label>
                  <input
                    type="text"
                    className="form-control one-border input-border margin-bottom-large"
                    placeholder="Password"
                    id="tutorPassword"
                    value=""
                  />
                </div>

                <div className="form-group">
                  <button
                    onClick={this.props.updateTTLState}
                    type="submit"
                    className="btnSubmit btn-styled margin-top"
                    value="Login"
                  >
                    Clock In
                  </button>
                  <div className="ttSignUp">
                    <p>
                      Don't have an account?
                      <button
                        onClick={this.props.updateTTSUState}
                        type="submit"
                        className="remove-border btn-link"
                        value="Login"
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginWindow;
