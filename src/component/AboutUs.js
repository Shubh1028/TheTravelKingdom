import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from '@material-ui/icons/Email';
import Sudhanshu from "../images/AboutUs/Sudhanshu.jpg";
import Kriti from "../images/AboutUs/Kriti.jpeg";
import Subh from "../images/AboutUs/Subh.jpeg";
import Neha from "../images/AboutUs/Neha.jpeg";
import Background from "../images/AboutUs/cardBackground.png";
import { Link } from "@material-ui/core";

export class AboutUs extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: window.screen.width > 540 ? "8.2%" : "23%",
          paddingBottom: window.screen.width > 540 ? "2.4%" : "1%",
          flexWrap: "wrap",
        }}
        className="container-main"
      >
        <Card
          elevation="10"
          style={{
            height: "350px",
            width: "300px",
            marginBottom: "30px",
            backgroundImage: `url(${Background})`,
          }}
        >
          <Avatar
            alt="Sudhanshu Ranjan"
            src={Sudhanshu}
            style={{
              height: "150px",
              width: "150px",
              marginLeft: "70px",
              marginTop: "20px",
            }}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <p>
              Project Leader <br />
              And BackEnd Developer
            </p>
            <Link
              style={{ marginRight: "10px", color: "black" }}
              href="https://www.linkedin.com/in/sudhanshu1ranjan/"
              target="blank"
            >
              <LinkedInIcon />
            </Link>
            <h3>Sudhanshu Ranjan</h3>
          </div>
        </Card>
        <Card
          elevation="10"
          style={{
            height: "350px",
            width: "300px",
            marginBottom: "30px",
            backgroundImage: `url(${Background})`,
          }}
        >
          <Avatar
            alt="Subh Shekhar"
            src={Subh}
            style={{
              height: "150px",
              width: "150px",
              marginLeft: "70px",
              marginTop: "20px",
            }}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <p>FrontEnd Developer</p>
            <Link
              style={{ marginRight: "10px", color: "black" }}
              href="https://www.linkedin.com/in/shubh-shekhar-81a8b2171"
              target="blank"
            >
              <LinkedInIcon />
            </Link>
            <br />
            <br />
            <h3>Subh Shekhar</h3>
          </div>
        </Card>
        <Card
          elevation="10"
          style={{
            height: "350px",
            width: "300px",
            marginBottom: "30px",
            backgroundImage: `url(${Background})`,
          }}
        >
          <Avatar
            alt="Kriti Kishore"
            src={Kriti}
            style={{
              height: "150px",
              width: "150px",
              marginLeft: "70px",
              marginTop: "20px",
            }}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <p>Content Writer</p>
            <Link
              style={{ marginRight: "10px", color: "black" }}
              href="https://www.linkedin.com/in/kriti-kishore-4b381a174/"
              target="blank"
            >
              <LinkedInIcon />
            </Link>
            <br />
            <br />
            <h3>Kriti Kishore</h3>
          </div>
        </Card>
        <Card
          elevation="10"
          style={{
            height: "350px",
            width: "300px",
            marginBottom: "30px",
            backgroundImage: `url(${Background})`,
          }}
        >
          <Avatar
            alt="Neha Chandla"
            src={Neha}
            style={{
              height: "150px",
              width: "150px",
              marginLeft: "70px",
              marginTop: "20px",
            }}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <p>Content Writer</p>
            <Link
              style={{ marginRight: "10px", color: "black" }}
              href="https://www.linkedin.com/in/neha-chandla-741a69192"
              target="blank"
            >
              <LinkedInIcon />
            </Link>
            <h3>Neha Chandla</h3>
          </div>
        </Card>
      </div>
    );
  }
}

export default AboutUs;
