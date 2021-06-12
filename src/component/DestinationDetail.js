import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "@material-ui/core/Card";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
// import StyledRating from "@material-ui/lab/Rating";
import "../css/Destination.css";
import { getDestinationDetail } from "../redux/action/action";
import { connect } from "react-redux";
import StyledRating from "@material-ui/lab/Rating";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export class DestinationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationDetailData: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDestinationDetail(id);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.destinationDetailData !== prevProps.destinationDetailData &&
      this.props.destinationDetailData !== undefined &&
      this.props.destinationDetailData !== null
    ) {
      this.setState({
        destinationDetailData: this.props.destinationDetailData,
      });
    }
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div style={{ paddingTop: "70px", paddingBottom: "40px" }}>
        {this.state.destinationDetailData &&
          this.state.destinationDetailData.map((data, i) => (
            <Card
              className="destination-outer-container"
              elevation="3"
              style={{
                marginLeft: "170px",
                marginTop: "30px",
                marginRight: "200px",
                padding: 10,
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div
                  className="carousel-of-destination"
                  style={{ height: "350px", width: "760px", margin: "2px" }}
                >
                  <Carousel showThumbs={false}>
                    {this.state.destinationDetailData &&
                      this.state.destinationDetailData[
                        i
                      ].destination_images.map((data) => (
                        <div>
                          <img
                            style={{ height: "350px", width: "100%" }}
                            src={data.image}
                            alt={data.name}
                          />
                        </div>
                      ))}
                  </Carousel>
                </div>
                <div style={{ width: "360px", flex: "wrap" }}>
                  <div
                    style={{
                      height: "50px",
                      width: "360px",
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <h3>{data.destination_name}</h3>
                  </div>
                  <div style={{ display: "flex", marginTop: "-10px" }}>
                    <LocationOnIcon
                      style={{
                        color: "blue",
                        height: "30px",
                        width: "30px",
                        marginLeft: "12px",
                        marginTop: "5px",
                      }}
                    />
                    <p
                      style={{
                        marginLeft: "10px",
                        color: "blue",
                        fontSize: "20px",
                        borderBottom: "1px solid grey",
                      }}
                    >
                      {data.destination_location}, {data.city}, {data.state}
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: "19px",
                      backgroundColor: "#EFF7FF",
                      padding: "0px",
                    }}
                  >
                    <StyledRating
                      name="customized-color"
                      defaultValue={data.ratings}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      readOnly
                    />
                    <br />
                    <CheckCircleRoundedIcon
                      style={{ color: "blue", fontSize: "20px" }}
                    />
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <b>Popular Activities :</b> {data.type_of_activities}
                    </span>
                    <br />
                    <CheckCircleRoundedIcon
                      style={{ color: "blue", fontSize: "20px" }}
                    />
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <b>Preferable Month :</b> {data.preferable_month}{" "}
                    </span>
                    <br />
                    <CheckCircleRoundedIcon
                      style={{ color: "blue", fontSize: "20px" }}
                    />
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      <b>Weather Type :</b> {data.weather_type}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "20px",
                  padding: "30px 20px 0px 10px",
                  marginBottom: "20px",
                  whiteSpace: "pre-wrap",
                }}
              >
                <b>Description :</b>
                <br />
                {data.description}
              </p>
              <p style={{ fontSize: "20px", padding: "0px 0px 0px 10px" }}>
                {" "}
                <b>How to Reach :</b>
                <br />
                {data.how_to_reach}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  padding: "0px 0px 0px 10px",
                  whiteSpace: "pre-wrap",
                }}
              >
                <b>Entry Fee :</b>
                <br />
                {data.entry_fee}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  padding: "0px 0px 0px 10px",
                  whiteSpace: "pre-wrap",
                }}
              >
                <b>Popular Actvities :</b>
                <br />
                {data.activities}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  padding: "0px 0px 0px 10px",
                  whiteSpace: "pre-wrap",
                }}
              >
                <b>Estimated Cost Distribution :</b>
                <br />
                &#x20b9;{data.estimated_cost_distribution}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  padding: "0px 0px 0px 10px",
                  whiteSpace: "pre-wrap",
                }}
              >
                <b>Tips for Visiting :</b>
                <br />
                {data.tips_for_visiting}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  padding: "0px 0px 0px 10px",
                  whiteSpace: "pre-wrap",
                }}
              >
                <b>Permissions Allowed :</b>
                <br />
                {data.permission_allowed}
              </p>
              <p style={{ fontSize: "20px", padding: "0px 0px 0px 10px" }}>
                {" "}
                <b>Theme :</b>
                <br />
                {data.theme}
              </p>
              <p style={{ fontSize: "20px", padding: "0px 0px 0px 10px" }}>
                {" "}
                <b>City :</b>
                <br />
                {data.city}
              </p>
              <p style={{ fontSize: "20px", padding: "0px 0px 0px 10px" }}>
                {" "}
                <b>State :</b>
                <br />
                {data.state}
              </p>
              <p style={{ fontSize: "20px", padding: "0px 0px 0px 10px" }}>
                {" "}
                <b>Pin Code :</b>
                <br />
                {data.pin_code}
              </p>
            </Card>
          ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    destinationDetailData: state.destinationDetail.destinationDetailData,
  };
};

export default connect(mapStateToProps, { getDestinationDetail })(
  DestinationDetail
);
