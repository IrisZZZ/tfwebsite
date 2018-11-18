import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ttSignUpSuccess.css";

class TtSignUp extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 form-logo ">
            <button className="button-logo-sign" onClick={this.props.Finish} />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h2>Congradulation!</h2>
            <h3>Successfully sign up!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TtSignUp;
