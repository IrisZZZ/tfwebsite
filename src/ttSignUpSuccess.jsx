import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ttSignUpSuccess.css";

class TtSignUp extends Component {
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
              <h3>Conguratulations!</h3>

              <div className="form-group">
                <button
                  onClick={this.props.Finish}
                  type="submit"
                  className="btnSubmit"
                >
                  Sign In Now
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
