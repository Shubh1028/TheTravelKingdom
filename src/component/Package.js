import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StyledRating from '@material-ui/lab/Rating';
import "../css/Package.css"
import {Divider, Button} from "@material-ui/core";
import { getpackage } from '../redux/action/action';
import {connect} from 'react-redux';

export class Package extends Component {

  constructor(props) {
    super(props);
    this.state = {
        packageData :[]
    }
}
componentDidMount(){          
  this.props.getpackage()
}
componentDidUpdate(prevProps) {
  if (this.props.packageData !== prevProps.packageData && this.props.packageData !== undefined && this.props.packageData !== null) {
      this.setState({
          packageData: this.props.packageData
      })
  }
}
handleClick(){
  alert("Services Coming Soon!!!");
}

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div style={{paddingTop: "70px"}}>
        <Divider style={{backgroundColor:"#4285F4", }}/>
        <h1 style={{ textAlign: "center", color: '#4285F4' ,fontFamily:"grorgia",
          fontSize: window.screen.width<400? "2rem":"",
        }}>
          Best Packages Offered
        </h1>
        <Divider style={{backgroundColor:"#4285F4"}}/>
        <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {this.state.packageData && this.state.packageData.map((data)=>
        <Card className="card-of-package"
        elevation="5"
          style={{width: "330px", margin: "20px", paddingBottom:10}}
        >
          <img
            height="270px"
            width="330px"
            src={data.package_image}
            alt={data.package_name}
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}>{data.package_name}, {data.package_location}</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={data.ratings}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Price : <span style={{fontSize: "18px", fontWeight: "heavier", color:"green"}}>
            <strike style={{color:"red", marginRight:"10px"}}> &#x20b9; {data.price}</strike>
            &#x20b9; {data.offer_price} </span>
        <Button style={{backgroundColor:"#4248f5", color:"white", marginLeft:"6%"}} onClick={()=>{this.handleClick()}}>Book Now</Button>
        </h5> 
        </div>
        </Card>
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      packageData:state.package.packageData,
  }
}

export default  connect(mapStateToProps, {getpackage})(Package);
