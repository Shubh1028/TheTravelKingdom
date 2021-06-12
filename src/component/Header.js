import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/Header.css";
import { logout } from "../redux/action/action";
import { connect } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import TheTravelKingdom from "../images/TheTravelKingdom.png";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: localStorage.getItem("token"),
    };
  }

  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="#4285F4"
          className="color-nav"
          variant="dark"
          fixed="top"
          style={{ backgroundColor: "#4285F4" }}
        >
          <Navbar.Brand>
            The Travel Kingdom
            {/* <img
              src={TheTravelKingdom}
              width="200"
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
              style={{marginLeft: "50px"}}
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ marginLeft: window.screen.width > 1024 ? "24%" : "0px" }}
          >
            <Nav className="mr-auto">
              <Nav.Link
                className="nav-link active"
                href="/"
                style={{ marginRight: "10px", fontSize: "18px" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-link active"
                href="/Package"
                style={{ marginRight: "10px", fontSize: "18px" }}
              >
                Packages
              </Nav.Link>
              <Nav.Link
                className="nav-link active"
                href="/DestinationListFilter"
                style={{ marginRight: "10px", fontSize: "18px" }}
              >
                Destination
              </Nav.Link>
              <Nav.Link
                className="nav-link active"
                href="/AboutUs"
                style={{ marginRight: "10px", fontSize: "18px" }}
              >
                About Us
              </Nav.Link>
            </Nav>

            <div style={{ display: "flex" }}>
              <Nav>
                {!this.state.login && (
                  <Nav.Link
                    className="nav-link active"
                    href="/Login"
                    style={{ marginRight: "10px", fontSize: "18px" }}
                  >
                    Login/Signup
                  </Nav.Link>
                )}
                {this.state.login && (
                  <Nav.Link
                    className="nav-link active"
                    href="/UserProfile"
                    style={{ marginRight: "10px", fontSize: "18px" }}
                  >
                    <AccountCircleIcon />
                  </Nav.Link>
                )}
                {this.state.login && (
                  <Nav.Link
                    className="nav-link active"
                    href="/"
                    style={{ marginRight: "10px", fontSize: "18px" }}
                    onClick={() => this.props.logout()}
                  >
                    <ExitToAppIcon />
                  </Nav.Link>
                )}
              </Nav>
            </div>
            {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, { logout })(Header);
