import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import LinkToSupervisor from "./linkToSupervisor";
import { Link } from "react-router-dom";
import LoginWindow from "./LoginWindow";

class Login extends Component {
  state = {
    stdLogin: false,
    ttLogin: false,
    stdSignUp: false,
    ttSignUp: false,
    ScreenShow: <LoginWindow />
  };

  renderContent() {
    if (
      this.state.stdLogin == false &&
      TouchList.state.ttLogin == false &&
      this.state.stdSignUp == false &&
      this.ttSignUp == false
    ) {
      this.setState({ ScreenShow: <LoginWindow /> });
    }
  }
  render() {
    return this.state.ScreenShow;
  }
}

export default Login;
