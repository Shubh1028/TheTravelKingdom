import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "@material-ui/core";
import "../css/LoginPage.css";
import { connect } from "react-redux";
import { authLogin } from "../redux/action/action";
// import Alert from '@material-ui/lab/Alert';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }
  //-------------->>>>>>>>>> FORM VALIDATION <<<<<<<<<---------------//

  validate = () => {
    let isError = false;
    const error = {};
    if (
      !/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
        this.state.email
      )
    ) {
      isError = true;
      error.emailError = "Please Enter Valid Email";
    }
    if (!this.state.password || this.state.password.length < 5) {
      isError = true;
      error.passwordError = "Password must be 5 characters long!";
    }

    this.setState({
      ...this.state,
      emailError: error.emailError,
      passwordError: error.passwordError,
    });
    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
      });
      var email = this.state.email;
      var password = this.state.password;
      this.props.authLogin({ email, password });
      console.log(email);
      console.log(password);
      localStorage.setItem("email", email);
    }
  };
  //-------------->>>>>>>>>> HANDLE CHANGE FUNCTION <<<<<<<<<---------------//
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //-------------->>>>>>>>>>  FOR ALERT SHOW CLOSE <<<<<<<<<---------------//

  handleClose(e) {
    this.setState({ alertShow: false });
  }
  //-------------->>>>>>>>>>  LIFE CYCLES <<<<<<<<<---------------//
  // componentDidMount() {
  //   if (localStorage.getItem('token')) {
  //     this.props.history.push('/');
  //     this.props.history.go();
  //     }
  //   }

  componentDidUpdate(prevProps, nextState) {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
      this.props.history.go();
    }
    if (
      this.props.error !== prevProps.error &&
      this.props.error !== null &&
      this.props.error !== undefined
    ) {
      alert("Enter Valid Credentials");
    }
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div
        style={{ paddingTop: "100px", height: "65vh", paddingBottom: "440px" }}
        className="container-main"
      >
        <Card
          elevation="10"
          className="card-of-login"
          style={{
            width: "28%",
            padding: "20px",
            marginLeft: "36%",
            // marginTop: "20px",
            backgroundColor: "#EEF4FF",
          }}
        >
          <h1>
            <span style={{ marginLeft: "113px", color: "blue" }}>Login</span>
          </h1>
          <br />
          {/* <h2><span style={{color: "#023C7B",borderBottom: "6px solid #023C7B"}}>Start You Journey By</span> <span style={{color: "blue", borderBottom: "6px solid blue"}}> Login</span></h2>
          <br /> */}
          <text style={{ fontSize: "20px", color: "blue" }}>Email Address</text>
          <br />
          <input
            type="email"
            name="email"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
            error={this.state.emailError ? true : false}
            helperText={this.state.emailError}
            placeholder="Enter Your Email"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "99%",
              height: "35px",
            }}
          />
          <text style={{ color: "red" }}>{this.state.emailError}</text>
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Password</text>
          <br />
          <input
            size="md"
            name="password"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
            error={this.state.passwordError ? true : false}
            helperText={this.state.passwordError}
            type="password"
            placeholder="Enter Your Password"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "99%",
              height: "35px",
            }}
          />
          <text style={{ color: "red" }}>{this.state.passwordError}</text>
          <br />
          <Button
            variant="primary"
            type="submit"
            size="lg"
            block
            onClick={(e) => this.onSubmit(e)}
          >
            Login
          </Button>
          <br />
          <text
            style={{
              marginLeft: window.screen.width > 540 ? "15%" : "7%",
              fontSize: 20,
            }}
          >
            Don't have an Account? <a href="/SignUp">Signup</a>
          </text>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    error: state.auth.error,
    status: state.auth.error,
  };
};

export default connect(mapStateToProps, { authLogin })(LoginPage);
