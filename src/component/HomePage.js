import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {Divider} from "@material-ui/core";
import "../css/HomePage.css";
import {getDestinationList} from '../redux/action/action'
import {connect} from 'react-redux'
import SearchIcon from "@material-ui/icons/Search";
import RedFort from '../images/HomePage/Red Fort1.jpg'
import BagaBeach from '../images/HomePage/Baga Beach.jpg'
import TajMahal from '../images/HomePage/Taj Mahal.jpg'
import GoldenTemple from '../images/HomePage/Golden Temple.jpg'
import PalolemBeach from '../images/HomePage/Palolem Beach.jpg'
import JalMahal from '../images/HomePage/JalMahal.jpg'
import Darjeeling from '../images/HomePage/Darjeeling.jpg'
import Manali from '../images/HomePage/Manali.jpg'
import HawaMahal from '../images/HomePage/Hawa Mahal.jpg'
import Background1 from '../images/HomePage/Background1.jpg'
import Background2 from '../images/HomePage/Background2.jpg'
import Falls from '../images/HomePage/Falls.jpg'
import Temple from '../images/HomePage/Temple.jpg'



export class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            search: '',
            destinationListData :[],
        }
    }
    componentDidUpdate(prevProps,prevState) {   
        if( this.state.search !== prevState.search && this.state.search !== null && this.state.search !== undefined){
            const search= this.state.search
            this.props.getDestinationList(search)
          }
        if (this.props.destinationListData !== prevProps.destinationListData && this.props.destinationListData !== undefined && this.props.destinationListData !== null) {
            this.setState({destinationListData: this.props.destinationListData})
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    handleClick=()=>{
        if(this.state.search){
            alert('Please select the data from given options')
        }
        else{
            alert("Please Enter Any Destination")
        }
    }
    handleKeyPress=(e)=>{
        var code = e.keyCode || e.which;
        if (code === 13) {
            if(this.state.search){
            alert('Please select the data from given options')
            }
            else{
                alert("Please Enter Any Destination")
            }
          }
    }

  render() {
      console.log(this.state)
      console.log(this.props)
    return (
      <div style={{backgroundColor:"#ebf2f2", position:'relative'}} className="home-header">
        <Carousel style={{ height: "50%" }} controls={false} indicators={false}>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Background2}
              alt="First slide"
              height="350px"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Background1}
              alt="Third slide"
              height="350px"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Temple}
              alt="Third slide"
              height="350px"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={Falls}
              alt="Third slide"
              height="350px"
            />
          </Carousel.Item>
        </Carousel>
        {/* <<<<<<<<<<<<<<<<<<<       SEARCH     >>>>>>>>>>>> */}
        <div style={{
          position:'absolute', 
        marginTop:'-200px', left:'50%', 
        transform: 'translate(-50%, 0%)',
        width: window.screen.width>520? 500:"90%",}}>
        <div style={{display:'flex'}}>
          <Button><LocationOnIcon/></Button>
          <input 
          // style={{width: window.screen.width>520? '30vw':'65vw'}}
          style={{width:'100%', padding: '3px 10px 0 20px'}}
          name='search'
          type='search'
          onChange={(e)=>this.handleChange(e)}
          value={this.state.search}
          placeholder={window.screen.width>520? 'Search Your Favourite Destination':'Search Destination'}
          />
          <Button><SearchIcon/></Button>
        </div>
        <div style={{maxHeight:250,overflowY:"auto"}}>
            {this.state.search && this.state.destinationListData && this.state.destinationListData.map((data)=>
            <div className="destination-options" key={data.id}>
                <Divider/>
                <li                            
                onClick={()=>this.props.history.push(`/Destination/${data.id}`)}
                >
                    {data.destination_name}, {data.city}, {data.state}
                </li>
            </div>
            )}
        </div>
        </div>
        <br/>
        <Divider style={{backgroundColor:"#4285F4", }}/>
        <h1 style={{ textAlign: "center", color: '#4285F4' ,fontFamily:"grorgia",
          fontSize: window.screen.width<400? "2rem":"",
        }}>
          States To Explore In India
        </h1>
        <Divider style={{backgroundColor:"#4285F4"}}/>
        <div className="home-cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "22px",
          }}
        >
          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/DestinationListFilter`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={BagaBeach}
              alt="Card image"
              style={{ opacity: 0.7, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Goa
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Baga Beach
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/Destination/1/`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={RedFort}
              alt="Red Fort"
              style={{ opacity: 0.7, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                New Delhi
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Red Fort
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/DestinationListFilter`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={TajMahal}
              alt="Card image"
              style={{ opacity: 0.8, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Uttar Pradesh
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Taj Mahal
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/DestinationListFilter`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={GoldenTemple}
              alt="Card image"
              style={{ opacity: 0.8, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Punjab
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Golden Temple
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <Divider style={{backgroundColor:"#4285F4", }}/>
        <h1 style={{ textAlign: "center", color: '#4285F4' ,fontFamily:"grorgia",
          fontSize: window.screen.width<400? "2rem":"",
        }}>
          Best Packages Available
        </h1>
        <Divider style={{backgroundColor:"#4285F4"}}/>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "22px",
          }}
        >
          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/Package`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={PalolemBeach}
              alt="Card image"
              style={{ opacity: 0.7, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Palolem Beach
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Starting At 2499
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/Package`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={JalMahal}
              alt="Card image"
              style={{ opacity: 0.7, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Jaipur
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Starting At 999
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/Package`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={Darjeeling}
              alt="Card image"
              style={{ opacity: 0.8, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Darjeeling
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Starting At 999
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/Package`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={Manali}
              alt="Card image"
              style={{ opacity: 0.8, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Manali
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Starting At 1599
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <Divider style={{backgroundColor:"#4285F4", }}/>
        <h1 style={{ textAlign: "center", color: '#4285F4' ,fontFamily:"grorgia",
          fontSize: window.screen.width<400? "2rem":"",
        }}>
          Themes To Explore
        </h1>
        <Divider style={{backgroundColor:"#4285F4"}}/>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "22px",
          }}
        >
          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/DestinationListFilter`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={BagaBeach}
              alt="Card image"
              style={{ opacity: 0.7, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Goa
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Romantic
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/DestinationListFilter`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={HawaMahal}
              alt="Card image"
              style={{ opacity: 0.7, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Jaipur
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Monumental
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/DestinationListFilter`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={TajMahal}
              alt="Card image"
              style={{ opacity: 0.8, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Agra
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Historic
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white"
            onClick={()=>this.props.history.push(`/DestinationListFilter`)}
            style={{
              width: "300px",
              height: "250px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              src={Manali}
              alt="Card image"
              style={{ opacity: 0.8, width: "300px", height: "250px" }}
            />
            <Card.ImgOverlay>
              <Card.Title
                style={{
                  paddingTop: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Himachal
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Adventure
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      destinationListData:state.destination.destinationListData,
  }
} 
export default connect(mapStateToProps, {getDestinationList})(HomePage)
