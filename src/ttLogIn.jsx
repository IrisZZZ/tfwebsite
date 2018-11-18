import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ttLogIn.css";

class TtLogIn extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 form-logo ">
            <button className="button-logo-sign" onClick={this.props.Finish} />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 form-sign-1 ">
            <h2>Great!</h2>
            <h3>You are Clock In</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TtLogIn;
