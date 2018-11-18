import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ttSignUp.css";

class TtSignUp extends Component {
  render() {
    return (
      <div>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-5 col-sm-10 login-form-1 ">
              <button
                className="button-logo-sign "
                id="tsLogo"
                onClick={this.props.Finish}
              />
            </div>
            <div className="col-md-2" />
            <div
              className="col-md-5 col-sm-10 ttlogin login-form-2"
              id="tt-Sign-Up"
            >
              <h3>Sign Up</h3>
              <div className="form-group">
                <label for="ttSignId">ID NUMBER</label>
                <input
                  type="text"
                  className="form-control one-border one-border input-border"
                  placeholder=""
                  id="ttSignId"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="ttSignEmail">SCHOOL EMAIL</label>
                <input
                  type="text"
                  className="form-control one-border one-border input-border"
                  placeholder=""
                  id="ttSignEmail"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="ttSignPassword">PASSWORD</label>
                <input
                  type="text"
                  className="form-control one-border one-border input-border"
                  placeholder=""
                  id="ttSignPassword"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="confirmationCode">CONFIRMATION CODE</label>
                <input
                  type="text"
                  className="form-control one-border one-border input-border"
                  placeholder=""
                  id="confirmationCode"
                  value=""
                />
              </div>

              <div className="form-group">
                <button
                  onClick={this.props.SubmitTtSignUp}
                  type="submit"
                  className="btnSubmit btn-styled"
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

export default TtSignUp;
