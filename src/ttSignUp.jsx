import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ttSignUp.css";

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
              <h3>Sign Up</h3>
              <div className="form-group">
                <label for="ttSignId">Tutor ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Student Id"
                  id="ttSignId"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="ttSignEmail">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  id="ttSignEmail"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="ttSignEmail">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  id="ttSignEmail"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="ttSignEmail">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  id="ttSignEmail"
                  value=""
                />
              </div>

              <div className="form-group">
                <button
                  onClick={this.props.SubmitTtSignUp}
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

export default TtSignUp;
