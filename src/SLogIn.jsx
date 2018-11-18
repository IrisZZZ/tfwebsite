import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./sLogIn.css";

class SLogIn extends Component {
  render() {
    return (
      <div>
        <div className="container login-container">
          <nav className="navbar navbar-default tfnav">
            <button className="logo-button" onClick={this.props.Finish} />
          </nav>
          <div className="row">
            <div className="col-lg-4 col-md-3" />
            <div className="col-lg-4  col-md-6 login-form-1 bk-box">
              <h3 className="margin-d-2">Supervisor</h3>
              <div className="form-group">
                <label className="label-styled" for="superId ">
                  SUPERVISOR ID
                </label>
                <input
                  type="text"
                  className="form-control one-border input-border"
                  placeholder=""
                  id="superId"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="superPassword">PASSWORD</label>
                <input
                  type="text"
                  className="form-control one-border input-border"
                  placeholder=""
                  id="superPassword"
                  value=""
                />
              </div>
              <button
                onClick={this.props.checkSuper}
                type="submit"
                class="btnSubmit btn-styled"
                value=""
              >
                Sign Up
              </button>
            </div>
            <div className="col-lg-4 col-md-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default SLogIn;
