import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./stdSignUp.css";

class StdSignUp extends Component {
  render() {
    return (
      <div>
        <div className="container login-container">
          <nav className="navbar navbar-default tfnav">
            {" "}
            <button onClick={this.props.Finish}>Tutor Force</button>
          </nav>
          <div className="row">
            <div className="col-md-5 col-sm-10 login-form-1 ">
              <h3>Logo</h3>
            </div>
            <div className="col-md-2" />
            <div className="col-md-5 col-sm-10 login-form-2">
              <h3>Sign Up</h3>
              <div className="form-group">
                <label for="stdSignId">ID NUMBER</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your ID here"
                  id="stdSignId"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="stdSignEmail">SCHOOL EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your school email here"
                  id="stdSignEmail"
                  value=""
                />
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
                <button
                  onClick={this.props.SubmitStdSignUp}
                  type="submit"
                  className="btnSubmit"
                >
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
