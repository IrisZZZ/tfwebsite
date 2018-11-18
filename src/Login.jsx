import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import LinkToSupervisor from "./linkToSupervisor";
import { Link } from "react-router-dom";
import LoginWindow from "./LoginWindow";
import StdLogIn from "./stdLogIn";
import StdSignUp from "./stdSignUp";
import TtSignUp from "./ttSignUp";
import TtLogIn from "./ttLogIn";
import TtSignUpSuccess from "./ttSignUpSuccess";
import SLogIn from "./sLogIn";
import Supervisors from "./supervisors";
class Login extends Component {
  state = {
    stdLogin: false,
    ttLogin: false,
    stdSignUp: false,
    ttSignUp: false,
    supervisor: false,
    submitStdSignUp: false,
    submitTtSignUp: false,
    supervisor: false,
    superCheck: false
  };

  updateSLState = () => {
    this.setState({ stdLogin: true });
  };
  updateSSUState = () => {
    this.setState({ stdSignUp: true });
  };
  updateTTLState = () => {
    this.setState({ ttLogin: true });
  };
  updateTTSUState = () => {
    this.setState({ ttSignUp: true });
  };
  updateSubmitStdSignUp = () => {
    this.setState({ submitStdSignUp: true });
  };
  updateSubmitTtSignUp = () => {
    this.setState({ submitTtSignUp: true });
  };
  finishSignUp = () => {
    this.setState({ stdLogin: false });
    this.setState({ ttLogin: false });
    this.setState({ stdSignUp: false });
    this.setState({ ttSignUp: false });
    this.setState({ submitStdSignUp: false });
    this.setState({ submitTtSignUp: false });
    this.setState({ supervisor: false });
  };
  supervisorLogIn = () => {
    this.setState({ supervisor: true });
  };
  checkSuper = () => {
    this.setState({ superCheck: true });
  };

  checkRendering() {
    if (this.state.supervisor == true && this.state.superCheck == false) {
      const Screen = (
        <SLogIn Finish={this.finishSignUp} checkSuper={this.checkSuper} />
      );
      return Screen;
    } else if (this.state.supervisor == true && this.state.superCheck == true) {
      const Screen = <Supervisors Finish={this.finishSignUp} />;
      return Screen;
    } else if (this.state.stdLogin == true) {
      const Screen = <StdLogIn Finish={this.finishSignUp} />;
      return Screen;
    } else if (
      this.state.stdSignUp == true &&
      this.state.submitStdSignUp == false
    ) {
      const Screen = (
        <StdSignUp
          SubmitStdSignUp={this.updateSubmitStdSignUp}
          Finish={this.finishSignUp}
        />
      );
      return Screen;
    } else if (this.state.ttLogin == true) {
      const Screen = <TtLogIn Finish={this.finishSignUp} />;
      return Screen;
    } else if (
      this.state.ttSignUp == true &&
      this.state.submitTtSignUp == false
    ) {
      const Screen = (
        <TtSignUp
          SubmitTtSignUp={this.updateSubmitTtSignUp}
          Finish={this.finishSignUp}
        />
      );
      return Screen;
    } else if (
      this.state.submitStdSignUp == true &&
      this.state.submitStdSignUp == true
    ) {
      const Screen = <TtSignUpSuccess Finish={this.finishSignUp} />;
      return Screen;
    } else if (
      this.state.submitTtSignUp == true &&
      this.state.submitTtSignUp == true
    ) {
      const Screen = <TtSignUpSuccess Finish={this.finishSignUp} />;
      return Screen;
    } else {
      const Screen = (
        <LoginWindow
          updateSLState={this.updateSLState}
          updateSSUState={this.updateSSUState}
          updateTTLState={this.updateTTLState}
          updateTTSUState={this.updateTTSUState}
          supervisorLogIn={this.supervisorLogIn}
        />
      );
      return Screen;
    }
  }
  render() {
    return this.checkRendering();
  }
}

export default Login;
