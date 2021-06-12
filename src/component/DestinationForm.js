import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { destinationSave } from "../redux/action/action";

export class DestinationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination_name:'',
      destination_location:'',
      city:'',
      state:'',
      pin_code:'',
      description:'',
      type_of_activities:'',
      activities:'',
      preferable_month:'',
      theme:'',
      weather_type:'',
      visiting_time:'',
      entry_fee:'',
      permission_allowed:'',
      how_to_reach:'',
      estimated_cost:'',
      estimated_cost_distribution:'',
      tips_for_visiting:'',
      ratings:'',
    };
  }
  validate = () => {
    let isError = false;
    if (!this.state.destination_name) {
        isError = true
        alert('Destination Name Field Is Required')
    }
    if (!this.state.destination_location) {
        isError = true
        alert("Destination Location Field Is Required");
    }
    if (!this.state.city) {
        isError = true
        alert("City Field Is Required");
    }
    if (!this.state.state) {
        isError = true
        alert("State Field Is Required");
    }
    if (!this.state.pin_code) {
        isError = true
        alert("Pin Code Field Is Required");
    }
    if (!this.state.description) {
      isError = true
      alert("Description Field Is Required");
    }
    if (!this.state.type_of_activities) {
      isError = true
      alert("Types Of Activities Field Is Required");
    }
    if (!this.state.activities) {
      isError = true
      alert("Activities Field Is Required");
    }
    if (!this.state.preferable_month) {
      isError = true
      alert("Preferable Month Field Is Required");
    }
    if (!this.state.theme) {
      isError = true
      alert("Theme Field Is Required");
    }
    if (!this.state.weather_type) {
      isError = true
      alert("Weather Type Field Is Required");
    }
    if (!this.state.visiting_time) {
      isError = true
      alert("Visiting Time Field Is Required");
    }
    if (!this.state.entry_fee) {
      isError = true
      alert("Entry Fee Field Is Required");
    }
    if (!this.state.permission_allowed) {
      isError = true
      alert("Permissions Allowed Field Is Required");
    }
    if (!this.state.how_to_reach) {
      isError = true
      alert("How To Reach Field Is Required");
    }
    if (!this.state.estimated_cost) {
      isError = true
      alert("Estimated Cost Field Is Required");
    }
    if (!this.state.estimated_cost_distribution) {
      isError = true
      alert("Estimated Cost Distribution Field Is Required");
    }
    if (!this.state.tips_for_visiting) {
      isError = true
      alert("Tips For Visiting Field Is Required");
    }
    if (!this.state.ratings) {
      isError = true
      alert("Ratings Field Is Required");
    }
    return isError;
  }
  //-------------->>>>>>>>>> HANDLE CHANGE FUNCTION <<<<<<<<<---------------//

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
    console.log(this.state);
  }
  //-------------->>>>>>>>>> ON SUBMIT FUNCTION <<<<<<<<<---------------//
  onSubmit = e => {
    e.preventDefault()
    const err = this.validate();
    if (!err) {
        const form = new FormData();
        form.append('destination_name', this.state.destination_name)
        form.append('destination_location', this.state.destination_location)
        form.append('city', this.state.city)
        form.append('state', this.state.state)
        form.append('pin_code', this.state.pin_code)
        form.append('description', this.state.description)
        form.append('type_of_activities', this.state.type_of_activities)
        form.append('activities', this.state.activities)
        form.append('preferable_month', this.state.preferable_month)
        form.append('theme', this.state.theme)
        form.append('weather_type', this.state.weather_type)
        form.append('visiting_time', this.state.visiting_time)
        form.append('entry_fee', this.state.entry_fee)
        form.append('permission_allowed', this.state.permission_allowed)
        form.append('how_to_reach', this.state.how_to_reach)
        form.append('estimated_cost', this.state.estimated_cost)
        form.append('estimated_cost_distribution', this.state.estimated_cost_distribution)
        form.append('tips_for_visiting', this.state.tips_for_visiting)
        form.append('ratings', this.state.ratings)
        this.props.destinationSave(form);
        console.log(...form)
        alert('Form Submitted')
        this.props.history.go();
    }
}
  render() {
    return (
      <div style={{ paddingTop: "100px", paddingBottom: "105px" }}>
        <form onSubmit={(e) => this.onSubmit(e)}>
        <Card
          elevation="10"
          className="card-of-login"
          style={{
            width: "700px",
            padding: "20px",
            marginLeft: "30%",
            backgroundColor: "#EEF4FF",
          }}
        >
          <h1>
            <span style={{ marginLeft: window.screen.width > 500 ? "150px" : "0px", color: "blue" }}>
              Destination Form
            </span>
          </h1>
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>
            Destination Name
          </text>
          <br />
          <input
            type="text"
            name="destination_name"
            value={this.state.destination_name}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter Destination Name"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>
            Destination Location
          </text>
          <br />
          <input
            type="text"
            name="destination_location"
            value={this.state.destination_location}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter Destination Location"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>City</text>
          <br />
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter City"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>State</text>
          <br />
          <input
            type="text"
            name="state"
            value={this.state.state}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter State"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Pincode</text>
          <br />
          <input
            type="number"
            name="pin_code"
            value={this.state.pin_code}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter Pincode"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Description</text>
          <br />
          <textarea
          rows={15}
          cols={15}
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter Description"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "105px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Types Of Activities</text>
          <br />
          <input
            type="text"
            name="type_of_activities"
            value={this.state.type_of_activities}
            onChange={(e) => this.handleChange(e)}
            placeholder="Types Of Activities"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Activities</text>
          <br />
          <textarea
            type="text"
            name="activities"
            value={this.state.activities}
            onChange={(e) => this.handleChange(e)}
            placeholder="Types Of Activities"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "105px",
            }}
          />
          <br/>
          <text style={{ fontSize: "20px", color: "blue" }}>Preferred Month</text>
          <br />
          <input
            type="text"
            name="preferable_month"
            value={this.state.preferable_month}
            onChange={(e) => this.handleChange(e)}
            placeholder="Preferred Month"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Theme</text>
          <br />
          <input
            type="text"
            name="theme"
            value={this.state.theme}
            onChange={(e) => this.handleChange(e)}
            placeholder="Theme"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          {/* <select
              className="form-control"
              style={{
                borderLeft: "12px solid blue",
                borderRadius: "5px",
                width: "97%",
                height: "35px",
                borderTopColor: "#D2F1FE ",
                paddingLeft: "10px",
                outline: "white",
              }}
              >
                <option value="">None</option>
                <option value="1">General</option>
                <option value="2">Monument</option>
                <option value="3">Romantic</option>
                <option value="3">Religious</option>
                <option value="3">Adventure</option>
                <option value="3">Beaches</option>
              </select> */}
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Wheather Type</text>
          <br />
          <input
            type="text"
            name="weather_type"
            value={this.state.weather_type}
            onChange={(e) => this.handleChange(e)}
            placeholder="Wheather Type"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Visiting Time</text>
          <br />
          <input
            type="text"
            name="visiting_time"
            value={this.state.visiting_time}
            onChange={(e) => this.handleChange(e)}
            placeholder="Visiting Time"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Entry Fee</text>
          <br />
          <textarea
            row={15}
            cols={15}
            type="text"
            name="entry_fee"
            value={this.state.entry_fee}
            onChange={(e) => this.handleChange(e)}
            placeholder="Entry Fee"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "105px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Permission Allowed</text>
          <br />
          <input
            type="text"
            name="permission_allowed"
            value={this.state.permission_allowed}
            onChange={(e) => this.handleChange(e)}
            placeholder="Permission Allowed"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>How To Reach</text>
          <br />
          <input
            type="text"
            name="how_to_reach"
            value={this.state.how_to_reach}
            onChange={(e) => this.handleChange(e)}
            placeholder="How To Reach"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Estimated Cost</text>
          <br />
          <input
            type="number"
            name="estimated_cost"
            value={this.state.estimated_cost}
            onChange={(e) => this.handleChange(e)}
            placeholder="Estimated Cost"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Price Description</text>
          <br />
          <textarea
          row={15}
          cols={15}
            type="text"
            name="estimated_cost_distribution"
            value={this.state.estimated_cost_distribution}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter Price Description"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "105px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Tips For Visiting</text>
          <br />
          <textarea
          row={15}
          cols={15}
            type="text"
            name="tips_for_visiting"
            value={this.state.tips_for_visiting}
            onChange={(e) => this.handleChange(e)}
            placeholder="Tips For Visiting"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "105px",
            }}
          />
          <br />
          <text style={{ fontSize: "20px", color: "blue" }}>Rating</text>
          <br />
          <input
            type="number"
            name="ratings"
            value={this.state.ratings}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter A Rating"
            className="form-control"
            style={{
              borderLeft: "12px solid blue",
              width: "97%",
              height: "35px",
            }}
          />
          <br />
          <Button
            variant="primary"
            type="submit"
            size="md"
            block
            onSubmit={(e) => this.onSubmit(e)}
          >
            Submit
          </Button>
        </Card>
        </form>
      </div>
    );
  }
}

export default connect(null,{ destinationSave })(DestinationForm)
