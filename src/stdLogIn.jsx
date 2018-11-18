import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./stdLogIn.css";

class StdLogIn extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 form-logo ">
            <button className="button-logo-sign" onClick={this.props.Finish} />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 form-sign ">
            <h2>Great!</h2>
            <h3>You are Sign In</h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 schedule ">
            <h2>Tutors Available</h2>
            <div className="classes">
              <h3>Roger Fleenor</h3>
              <p>Room 101</p>
            </div>

            <div className="classes">
              <h3>Iris Zheng</h3>
              <p>Room 102</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StdLogIn;
