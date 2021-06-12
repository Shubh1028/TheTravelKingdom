import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Button from "react-bootstrap/Button";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { packageSave } from "../redux/action/action";

export class PackageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        package_name:'',
        package_location:'',
        ratings:'',
        price:'',
        offer_price:'',
        package_image:[],
        imageShow:[],
        isEditing:'false'
    };
  }

    validate = () => {
        let isError = false;
        if (!this.state.package_name) {
            isError = true
            alert('Package Name Field Is Required')
        }

        if (!this.state.package_location) {
            isError = true
            alert("Package Location Field Is Required");
        }
        if (!this.state.ratings) {
            isError = true
            alert("Ratings Field Is Required");
        }
        if (!this.state.price) {
            isError = true
            alert("Price Field Is Required");
        }
        if (!this.state.offer_price) {
            isError = true
            alert("Offer Field Is Required");
        }
        //Image Length field check
        if (this.state.package_image.length <= 0) {
            isError = true
            alert("Please add one image")
        }
        return isError;
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.package_image !== prevState.package_image && this.state.package_image !== null && this.state.package_image !== undefined) {
            this.setState({ imageShow: URL.createObjectURL(this.state.package_image) })
        }
    }
    //-------------->>>>>>>>>> HANDLE CHANGE FUNCTION <<<<<<<<<---------------//

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, });
        console.log(this.state);
    }
    //-------------->>>>>>>>>> IMAGES UPLOAD FUNCTION <<<<<<<<<---------------//

    imageHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.files[0]
        })

    };
    //-------------->>>>>>>>>> ON SUBMIT FUNCTION <<<<<<<<<---------------//
    onSubmit = e => {
        e.preventDefault()
        const err = this.validate();
        if (!err) {
            const form = new FormData();
            form.append('package_name', this.state.package_name)
            form.append('package_location', this.state.package_location)
            form.append('ratings', this.state.ratings)
            form.append('price', this.state.price)
            form.append('offer_price', this.state.offer_price)
            form.append('package_image', this.state.package_image)
            this.props.packageSave(form);
            console.log(...form)
            if(!err){
                alert('Form Submitted SucessFully!!!')
                // this.setState = {
                //     package_name:'',
                //     package_location:'',
                //     ratings:'',
                //     price:'',
                //     offer_price:'',
                //     package_image:[],
                // };
            }
        }
    }
    render() {
        console.log(this.state);
        console.log(this.props);
        return (
        <div style={{ paddingTop: "100px", paddingBottom: "60px" }}>
            <form onSubmit={(e) => this.onSubmit(e)}>
            <Card
            elevation="10"
            className="card-of-login"
            style={{
                width:  "700px",
                padding: "20px",
                marginLeft: window.screen.width >510 ? "30%" : "0%",
                backgroundColor: "#EEF4FF",
            }}
            >
            <h1>
                <span style={{ marginLeft: window.screen.width > 500 ? "170px" : "0px", color: "blue" }}>
                Package Form
                </span>
            </h1>
            <br />
            <text style={{ fontSize: "20px", color: "blue" }}>
                Package Name
            </text>
            <br />
            <input
                type="text"
                name="package_name"
                value={this.state.package_name}
                onChange={(e) => this.handleChange(e)}
                placeholder="Enter Name"
                className="form-control"
                style={{
                borderLeft: "12px solid blue",
                width: "97%",
                height: "35px",
                }}
            />
            <br />
            <text style={{ fontSize: "20px", color: "blue" }}>
                Package Location
            </text>
            <br />
            <input
                type="text"
                name="package_location"
                value={this.state.package_location}
                onChange={(e) => this.handleChange(e)}
                placeholder="Enter Location"
                className="form-control"
                style={{
                borderLeft: "12px solid blue",
                width: "97%",
                height: "35px",
                }}
            />
            <br />
            <text style={{ fontSize: "20px", color: "blue" }}>Price</text>
            <br />
            <input
                name="price"
                value={this.state.price}
                onChange={(e) => this.handleChange(e)}
                type="number"
                placeholder="Enter Price"
                className="form-control"
                style={{
                borderLeft: "12px solid blue",
                width: "97%",
                height: "35px",
                }}
            />
            <br />
            <text style={{ fontSize: "20px", color: "blue" }}>Offer Price</text>
            <br />
            <input
                name="offer_price"
                value={this.state.offer_price}
                onChange={(e) => this.handleChange(e)}
                type="number"
                placeholder="Enter Offer Price"
                className="form-control"
                style={{
                borderLeft: "12px solid blue",
                width: "97%",
                height: "35px",
                }}
            />
            <br/>
            <text style={{ fontSize: "20px", color: "blue" }}>Rating</text>
            <br />
            <input
                name="ratings"
                value={this.state.ratings}
                onChange={(e) => this.handleChange(e)}
                type="number"
                placeholder="Enter Rating"
                className="form-control"
                style={{
                borderLeft: "12px solid blue",
                width: "97%",
                height: "35px",
                }}
            />
            <br />
            <text style={{ fontSize: "20px", color: "blue" }}>Image</text>
            <br />
            <label htmlFor="package_image" style={{ paddingRight: 10 }}>
                <Avatar
                src={this.state.imageShow}
                alt="Package Image"
                style={{
                    height: 200,
                    width: window.screen.width >500 ? 630 : 300,
                    textAlign: "center",
                    marginTop: 5,
                    borderRadius: "5px",
                }}
                />
            </label>
            <input
                name="package_image"
                accept="image/jpeg, image/png, image/jpg"
                id="package_image"
                onChange={(e) => this.imageHandler(e)}
                type="file"
                style={{ display: "none" }}
            />
            <br/>
            <br/>
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

export default connect(null,{ packageSave })(PackageForm)
