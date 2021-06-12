import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StyledRating from '@material-ui/lab/Rating';
import "../css/StatePage.css"
import { Button, Divider } from "@material-ui/core";

export class statePage extends Component {
  render() {
    return (
      <div style={{paddingTop: "70px"}}>
        <Divider style={{backgroundColor:"#4285F4", }}/>
        <h1 style={{ textAlign: "center", color: '#4285F4' ,fontFamily:"grorgia",
          fontSize: window.screen.width<400? "2rem":"",
        }}>
          States To Explore
        </h1>
        <Divider style={{backgroundColor:"#4285F4"}}/>
        <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        <Card className="card-of-state"
        elevation="5"
          style={{ width: "340px", margin: "20px"}}
        >
          <img
            height="270px"
            src="https://lp-cms-production.imgix.net/2019-06/384e10f39ebc6fab9b991467541ce8ed-dal-lake.jpg" alt="Image1"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}>Srinagar, Jammu Kashmir</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}>Dal Lake, Nishat Bagh, Chashemi Shahi</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        <Card
          className="card-of-state"
          elevation="5"
          style={{ width: "330px", margin: "20px" ,paddingBottom:10}}
        >
          <img
            height="270px"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201509/f-tamil-1_647_091715023748.jpg" alt="Image2"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}>Ooty, Tamil Nadu</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}>Nilgiri Mountain Railway  Ooty Lake  Emerald Lake</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        <Card
          className="card-of-state"
          elevation="5"
          style={{ width: "330px", margin: "20px" ,paddingBottom:10}}
        >
          <img
            height="270px"
            src="https://amp.thenationalnews.com/image/policy:1.156949:1499293771/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8" alt="Image3"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}>Gangtok, Sikkim</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}> Nathula Pass  MG Road, Gangtok  Rumtek Monastery</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        <Card
          className="card-of-state"
          elevation="5"
          style={{ width: "330px", margin: "20px" ,paddingBottom:10}}
        >
          <img
            height="270px"
            src="https://www.holidify.com/images/cmsuploads/compressed/3617_20190213162441jpg" alt="Image4"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}> Andaman and Nicobar</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}>Cellular Jail, Neil Island</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        </div>
        <br/>
        <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        <Card
          className="card-of-state"
          elevation="5"
          style={{ width: "340px", margin: "20px" ,paddingBottom:10}}
        >
          <img
            height="270px"
            src="https://lp-cms-production.imgix.net/2019-06/384e10f39ebc6fab9b991467541ce8ed-dal-lake.jpg" alt="Image5"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}>Srinagar, Jammu Kashmir</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}>Dal Lake, Nishat Bagh, Chashemi Shahi</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        <Card
          className="card-of-state"
          elevation="5"
          style={{ width: "330px", margin: "20px" ,paddingBottom:10}}
        >
          <img
            height="270px"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201509/f-tamil-1_647_091715023748.jpg" alt="Image6"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}>Ooty, Tamil Nadu</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}>Nilgiri Mountain Railway  Ooty Lake  Emerald Lake</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        <Card
          className="card-of-state"
          elevation="5"
          style={{ width: "330px", margin: "20px" ,paddingBottom:10}}
        >
          <img
            height="270px"
            src="https://amp.thenationalnews.com/image/policy:1.156949:1499293771/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8" alt="Image7"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}>Gangtok, Sikkim</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}> Nathula Pass  MG Road, Gangtok  Rumtek Monastery</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        <Card
          className="card-of-state"
          elevation="5"
          style={{ width: "330px", margin: "20px" ,paddingBottom:10}}
        >
          <img
            height="270px"
            src="https://www.holidify.com/images/cmsuploads/compressed/3617_20190213162441jpg" alt="Image8"
          ></img>
          <div style={{marginLeft: "8px", marginTop: "8px"}}>
          <div style={{display: "flex"}}>
          <LocationOnIcon  style={{color: "blue", marginTop: "2px"}}/> <h4 style={{ marginLeft: "5px", color: "black" }}> Andaman and Nicobar</h4>
          </div>
          <StyledRating
          name="customized-color"
          defaultValue={4}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          readOnly
        />
        <h5 style={{fontWeight: "bold"}}>Famous Places : <span style={{fontSize: "18px", fontWeight: "lighter"}}>Cellular Jail, Neil Island</span></h5>
        <Button style={{backgroundColor:"#4285F4", color:"white", width:"100%", textTransform:"capitalize"}}>Read More...</Button>
        </div>
        </Card>
        </div>
      </div>
    );
  }
}

export default statePage;
