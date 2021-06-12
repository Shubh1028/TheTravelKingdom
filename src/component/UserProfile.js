import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Card from "@material-ui/core/Card";
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux";
import { getUserProfile } from "../redux/action/action";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:localStorage.getItem('email'),
      userProfileData: []
    };
  }
  componentDidMount(){  
    const email = this.state.email
    this.props.getUserProfile(email)
  }
  componentDidUpdate(prevProps) {
    if (this.props.userProfileData !== prevProps.userProfileData && this.props.userProfileData !== undefined && this.props.userProfileData !== null) {
        this.setState({
            userProfileData: this.props.userProfileData
        })
    }
  }
    render() {
      console.log(this.state);
      console.log(this.props);
        return (
          <div style={{paddingTop: "101px", paddingBottom: "50px"}} className="container-main">
          {this.state.userProfileData && this.state.userProfileData.map((data)=>
          <Card
            elevation="10"
            className="card-of-login"
            style={{
              width: "46%",
              padding: "20px",
              marginLeft: "420px",
              marginTop: "10px",
              backgroundColor: "#EEF4FF",
            }}
          >
            <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" style={{height: "170px", width: "170px", marginLeft: window.screen.width>540? '33%':'25%' }}/>
            
            <br/>
            <div
              style={{
                display: "flex",
                flexWrap: window.screen.width>540? '':'wrap',
                justifyContent: "space-between",
              }}
            >
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Name: {data.namw}
                </text>
                <br />
                <input
                  type="text"
                  value={data.name}
                  placeholder="Enter Your First Name"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: window.screen.width>540? '20vw':'88vw',
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                />
              </div>
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>
                  Email Address
                </text>
                <br />
                <input
                  type="email"
                  value={data.email}
                  placeholder="Your Email"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: window.screen.width>540? '20vw':'88vw',
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "green",
                  }}
                />
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: window.screen.width>540? '':'wrap',
                justifyContent: "space-between",
              }}
            >
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>Gender</text>
                <br />
                <select
                  className="form-control"
                  value={data.gender}
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: window.screen.width>540? '20vw':'88vw',
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                >
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
              </div>
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>Mobile Number</text>
                <br />
                <input
                  size="lg"
                  type="number"
                  value={data.mobile}
                  placeholder="Your Mobile Number"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderTopColor: "#D2F1FE ",
                    borderRadius: "5px",
                    width: window.screen.width>540? '20vw':'88vw',
                    height: "35px",
                    paddingLeft: "10px",
                    outline: "#fff",
                  }}
                />
              </div>
            </div>
            <br/>
            <div
              style={{
                display: "flex",
                flexWrap: window.screen.width>540? '':'wrap',
                justifyContent: "space-between",
              }}
            >
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>Age Group</text>
                <br />
                <select
                  className="form-control"
                  value={data.age_range}
                  style={{
                    borderLeft: "20px solid blue",
                    borderRadius: "5px",
                    width: window.screen.width>540? '20vw':'88vw',
                    height: "35px",
                    borderTopColor: "#D2F1FE ",
                    paddingLeft: "10px",
                    outline: "white",
                  }}
                >
                  <option value="1">0-17 Years</option>
                  <option value="2">18-24 Years</option>
                  <option value="3">25-35 Years</option>
                  <option value="3">35-50 Years</option>
                  <option value="3">50-70 Years</option>
                </select>
              </div>
              <div>
                <text style={{ fontSize: "20px", color: "blue" }}>Group</text>
                <br />
                <input
                  size="lg"
                  type="text"
                  value={data.groups}
                  placeholder="Group"
                  className="form-control"
                  style={{
                    borderLeft: "20px solid blue",
                    borderTopColor: "#D2F1FE ",
                    borderRadius: "5px",
                    width: window.screen.width>540? '20vw':'88vw',
                    height: "35px",
                    paddingLeft: "10px",
                    outline: "#fff",
                  }}
                />
              </div>
            </div>
            
            <br />
            <Button
              variant="primary"
              type="submit"
              size='lg'
              block
            >
              Your Details
            </Button>
          </Card>
          )}
        </div>
        )
    }
}
const mapStateToProps = state => {
  return {
      userProfileData:state.userProfile.userProfileData,
  }
}
export default  connect(mapStateToProps, {getUserProfile})(UserProfile);

