import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./stdSignUp.css";

class StdSignUp extends Component {
  render() {
    return (
      <div>
        <div className="container login-container">
          <nav className="navbar navbar-default tfnav"> Tutor Force</nav>
          <div className="row">
            <div className="col-md-5 col-sm-10 login-form-1 ">
              <h3>Logo</h3>
            </div>
            <div className="col-md-2" />
            <div className="col-md-5 col-sm-10 login-form-2">
              <h3>Sign Up</h3>
              <div className="form-group">
                <label for="stdSignId">Stident ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Student Id"
                  id="stdSignId"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="stdSignEmail">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  id="stdSignEmail"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="stdSignSubject">Subject</label>
                <select class="form-control" id="stdSignSubject">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stdSignInMajor">Major</label>
                <select class="form-control" id="stdSignInMajor">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="stdSignInYear">Year</label>
                <select class="form-control" id="stdSignInYear">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <div className="form-group">
                <button type="submit" className="btnSubmit">
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

export default StdSignUp;
