import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "@material-ui/core/Card";
import "../css/LoginPage.css";
import { connect } from "react-redux";
import { passwordSignUp } from "../redux/action/action";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      mobile: "",
      gender: "1",
      security_question: "1",
      security_answer: "",
      age_range: "1",
      nameError: "",
      emailError: "",
      passwordError: "",
      mobileError: "",
      genderError: "",
      security_questionError: "",
      security_answerError: "",
      age_rangeError: "",
    };
  }
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
    if (!this.state.name || this.state.name.length < 2) {
      isError = true;
      error.nameError = "Name Is Required";
    }
    if (!this.state.mobile) {
      isError = true;
      error.mobileError = "Mobile Number Is Required";
    }
    if (!this.state.age_range) {
      isError = true;
      error.age_rangeError = "Age Is Required";
    }
    if (!this.state.gender) {
      isError = true;
      error.genderError = "Gender Is Required";
    }
    if (!this.state.security_question) {
      isError = true;
      error.security_questionError = "Security Question Is Required";
    }
    if (!this.state.security_answer) {
      isError = true;
      error.security_answerError = "Security Answer Is Required";
    }
    this.setState({
      ...this.state,
      emailError: error.emailError,
      passwordError: error.passwordError,
      nameError: error.nameError,
      mobileError: error.mobileError,
      age_rangeError: error.age_rangeError,
      genderError: error.genderError,
      security_questionError: error.security_questionError,
      security_answer: error.security_answerError,
    });
    return isError;
  };
  // -------------->>>>>>>>>> HANDLE CHANGE FUNCTION <<<<<<<<<---------------//

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      const form = new FormData();
      form.append("email", this.state.email);
      form.append("password", this.state.password);
      form.append("name", this.state.name);
      form.append("mobile", this.state.mobile);
      form.append("gender", this.state.gender);
      form.append("age_range", this.state.age_range);
      form.append("security_question", this.state.security_question);
      form.append("security_answer", this.state.security_answer);
      this.props.passwordSignUp(form);
      console.log(...form);
    }
  };
  //-------------->>>>>>>>>> LIFE CYCLES <<<<<<<<<---------------//
  componentDidUpdate(prevProps) {
    if (
      Boolean(!this.props.error) &&
      this.props.status !== null &&
      this.props.status !== undefined &&
      this.props.status === true
    ) {
      alert("User Registered!");
      this.props.history.push("/login");
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div
        style={{ paddingTop: "101px", paddingBottom: "50px" }}
        className="container-main"
      >
        <form onSubmit={(e) => this.onSubmit(e)}>
          <Card
            elevation="10"
            className="card-of-login"
            style={{
              width: "46%",
              padding: "20px",
              marginLeft: window.screen.width > 540 ? "28%" : "",
              marginTop: "10px",
              backgroundColor: "#EEF4FF",
            }}
          >
            <h1>
              <span
                style={{
                  marginLeft: window.screen.width > 540 ? "35%" : "0px",
                  color: "blue",
                }}
              >
                Sign Up
              </span>
            </h1>
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>Name</text>
                <br />
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.handlechange(e)}
                  placeholder="Enter Your First Name"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                />
                <div>
                  <text style={{ color: "red" }}>{this.state.nameError}</text>
                </div>
              </div>
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Email Address
                </text>
                <br />
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.handlechange(e)}
                  placeholder="Enter Your Email"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                />
                <div>
                  <text style={{ color: "red" }}>{this.state.emailError}</text>
                </div>
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Age Range
                </text>
                <br />
                <select
                  className="form-control"
                  name="age_range"
                  value={this.state.age_range}
                  onChange={(e) => this.handlechange(e)}
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                >
                  {/* <option value="">None</option> */}
                  <option value="1">0-17 Years</option>
                  <option value="2">18-24 Years</option>
                  <option value="3">25-35 Years</option>
                  <option value="3">35-50 Years</option>
                  <option value="3">50-90 Years</option>
                </select>
                <div>
                  <text style={{ color: "red" }}>
                    {this.state.age_rangeError}
                  </text>
                </div>
              </div>
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Phone Number
                </text>
                <br />
                <input
                  type="number"
                  name="mobile"
                  value={this.state.mobile}
                  onChange={(e) => this.handlechange(e)}
                  placeholder="Enter Your Number"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                />
                <div>
                  <text style={{ color: "red" }}>{this.state.mobileError}</text>
                </div>
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>Gender</text>
                <br />
                <select
                  className="form-control"
                  name="gender"
                  value={this.state.gender}
                  onChange={(e) => this.handlechange(e)}
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                >
                  {/* <option value="">None</option> */}
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
                <div>
                  <text style={{ color: "red" }}>{this.state.genderError}</text>
                </div>
              </div>
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Password
                </text>
                <br />
                <input
                  size="lg"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handlechange(e)}
                  placeholder="Enter Your Password"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderTopColor: "#D2F1FE ",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    paddingLeft: "10px",
                    outline: "#fff",
                  }}
                />
                <div>
                  <text style={{ color: "red" }}>
                    {this.state.passwordError}
                  </text>
                </div>
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Select Security Question ?
                </text>
                <br />
                <select
                  className="form-control"
                  name="security_question"
                  value={this.state.security_question}
                  onChange={(e) => this.handlechange(e)}
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                >
                  {/* <option value="">None</option> */}
                  <option value="1">
                    Which Is Your Favourite Destination ?
                  </option>
                  <option value="2">What Is Your Home Town ? </option>
                  <option value="3">What Is Your Nationality</option>
                </select>
                <div>
                  <text style={{ color: "red" }}>
                    {this.state.security_questionError}
                  </text>
                </div>
              </div>
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Add Your Answer Here
                </text>
                <br />
                <input
                  size="lg"
                  type="text"
                  name="security_answer"
                  // value={this.state.security_answer}
                  onChange={(e) => this.handlechange(e)}
                  placeholder="Your Answer"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderTopColor: "#D2F1FE",
                    borderRadius: "5px",
                    width: "310px",
                    height: "35px",
                    paddingLeft: "10px",
                    outline: "#fff",
                  }}
                />
                <div>
                  <text style={{ color: "red" }}>
                    {this.state.security_answerError}
                  </text>
                </div>
              </div>
            </div>

            <br />
            <Button
              variant="primary"
              type="submit"
              size="lg"
              block
              onClick={(e) => this.onSubmit(e)}
            >
              Sign Up
            </Button>
            <br />
            <text
              style={{
                marginLeft: window.screen.width > 540 ? "30%" : "",
                fontSize: 20,
              }}
            >
              Already have an Account? <a href="/login">Login</a>
            </text>
          </Card>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.passwordRegister.error,
  loading: state.passwordRegister.loading,
  status: state.passwordRegister.status,
});

export default connect(mapStateToProps, { passwordSignUp })(SignUp);
