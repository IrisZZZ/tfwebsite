import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ttLogIn.css";

class TtLogIn extends Component {
  render() {
    return (
      <div>
        <div className="container login-container">
          <nav className="navbar navbar-default tfnav">
            {" "}
            <button onClick={this.props.Finish}>Tutor Force</button>
          </nav>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-4 col-sm-10 login-form-1 ">
              <h3>Logo</h3>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
            </div>
            <div className="col-md-4 col-sm-10 login-form-2">
              <h3>Great You are Clock In</h3>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default TtLogIn;
