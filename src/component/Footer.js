import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "../css/Footer.css";
import TheTravelKingdom from "../images/TheTravelKingdom.png"
import { Divider, Link } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <div  style={{ backgroundColor: "#D7E7FF", marginBottom:-20}}>
        <div className="destination-footer">
          <div className="destination-footer-container">
            <Link href='/'>
            <img
              src={TheTravelKingdom}
              width="150"
              height="90"
              className="d-inline-block align-top"
              alt="The Travel Kingdom Logo"
            />
            </Link>
          </div>
          <div className="destination-footer-container">
            <text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              OTHERS
            </text>
            <ul>
              <li>
                <a href="/">Advertise With Us</a>
              </li>
              <li>
                <a href="/">Partners</a>
              </li>
              <li>
                <a href="/AboutUs">About Us</a>
              </li>
            </ul>
          </div>
          <div className="destination-footer-container">
            <text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              QUICK LINKS
            </text>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/DestinationListFilter">Destination</a>
              </li>
              <li>
                <a href="/Package">Package</a>
              </li>
            </ul>
          </div>
          <div className="destination-footer-container">
            <text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              CONNECT
            </text><br/>
            <div style={{display:"flex"}}>
                <Link style={{marginRight:"10px", color:'black'}} href="https://www.facebook.com/thetravelkingdoms/" target='blank'>
                  <FacebookIcon fontSize="medium"/>
                </Link>
                <Link style={{marginRight:"10px", color:'black'}} href="https://www.instagram.com/thetravelkingdom/" target='blank'>
                  <InstagramIcon fontSize="medium"/>
                </Link>
                <Link style={{marginRight:"10px", color:'black'}} href="/">
                  <TwitterIcon fontSize="medium"/>
                </Link>
                <Link style={{marginRight:"10px", color:'black'}} href="/">
                  <YouTubeIcon fontSize="medium"/>
                </Link> 
            </div>
          </div>
        </div>
        <Divider style={{backgroundColor:"lightgrey", }}/>
        <p style={{ textAlign: "center", color: 'grey' ,fontFamily:"grorgia",
          fontSize: window.screen.width>360? "18px":"17",
        }}>
          &copy; The Travel Kingdom. All Rights Reserved 2021.
        </p>
      </div>
    );
  }
}

export default Footer;
