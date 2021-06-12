import React, { Component } from "react";
import "../css/DestinationListFilter.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  Card,
  Modal,
  Paper,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import SearchIcon from "@material-ui/icons/Search";
import { Dropdown } from "react-bootstrap/";
import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  getDestinationFilterList,
  getDestinationDescendingFilterList,
  getDestinationPopularityFilterList,
  getEstimatedCostFilterList,
  getThemeFilterList,
  getStateFilterList,
} from "../redux/action/action";

export class DestinationListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimated_cost_min: "",
      estimated_cost_max: "",
      ascending: "",
      popularity: "",
      theme: "",
      state: "",
      search: "",
      destinationListFilterData: [],
      themeChecked: false,
      stateChecked: false,
      costChecked: false,
    };
  }
  handleCheckboxCost = (e) => {
    this.setState({
      costChecked: e.target.checked,
    });
    if (this.state.costChecked === false) {
      this.setState({
        estimated_cost_min: e.target.name,
        estimated_cost_max: e.target.value,
      });
    } else {
      this.setState({
        estimated_cost_min: "",
        estimated_cost_max: "",
      });
      this.props.history.go();
    }
  };
  handleCheckboxChange = (e) => {
    this.setState({
      themeChecked: e.target.checked,
    });
    if (this.state.themeChecked === false) {
      this.setState({
        theme: e.target.name,
      });
    } else {
      this.setState({
        theme: "",
      });
      this.props.history.go();
    }
  };
  handleCheckboxState = (e) => {
    this.setState({
      stateChecked: e.target.checked,
    });
    if (this.state.stateChecked === false) {
      this.setState({
        state: e.target.name,
      });
    } else {
      this.setState({
        state: "",
      });
      this.props.history.go();
    }
  };
  popularityFilter = () => {
    this.setState({
      ascending: "",
    });
  };
  ascendingFilter = () => {
    this.setState({
      ascending: true,
    });
  };
  descendingFilter = () => {
    this.setState({
      ascending: false,
    });
  };
  componentDidMount() {
    this.props.getDestinationFilterList();
    this.props.getDestinationDescendingFilterList();
    this.props.getDestinationPopularityFilterList();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.destinationPopularityListFilterData !==
        prevProps.destinationPopularityListFilterData &&
      this.props.destinationPopularityListFilterData !== undefined &&
      this.props.destinationPopularityListFilterData !== null
    ) {
      this.setState({
        destinationListFilterData:
          this.props.destinationPopularityListFilterData,
      });
    }
    if (
      this.state.ascending !== prevState.ascending &&
      this.state.ascending === true
    ) {
      this.setState({
        destinationListFilterData: this.props.destinationListFilterData,
      });
    }
    if (
      this.state.ascending !== prevState.ascending &&
      this.state.ascending === false
    ) {
      this.setState({
        destinationListFilterData:
          this.props.destinationDescendingListFilterData,
      });
    }
    if (
      this.state.ascending !== prevState.ascending &&
      this.state.ascending === ""
    ) {
      this.setState({
        destinationListFilterData:
          this.props.destinationPopularityListFilterData,
      });
    }
    if (
      this.state.themeChecked !== prevState.themeChecked &&
      this.state.themeChecked === true
    ) {
      const theme = this.state.theme;
      this.props.getThemeFilterList(theme);
    }
    if (
      this.props.destinationThemeListFilterData !==
        prevProps.destinationThemeListFilterData &&
      this.props.destinationThemeListFilterData !== undefined &&
      this.props.destinationThemeListFilterData !== null
    ) {
      this.setState({
        destinationListFilterData: this.props.destinationThemeListFilterData,
      });
    }
    if (
      this.state.stateChecked !== prevState.stateChecked &&
      this.state.stateChecked === true
    ) {
      const state = this.state.state;
      this.props.getStateFilterList(state);
      this.setState({
        destinationListFilterData: this.props.destinationStateListFilterData,
      });
    }
    if (
      this.props.destinationStateListFilterData !==
        prevProps.destinationStateListFilterData &&
      this.props.destinationStateListFilterData !== undefined &&
      this.props.destinationStateListFilterData !== null
    ) {
      this.setState({
        destinationListFilterData: this.props.destinationStateListFilterData,
      });
    }
    if (
      this.state.costChecked !== prevState.costChecked &&
      this.state.costChecked === true
    ) {
      const estimated_cost_min = this.state.estimated_cost_min,
        estimated_cost_max = this.state.estimated_cost_max;
      this.props.getEstimatedCostFilterList(
        estimated_cost_min,
        estimated_cost_max
      );
      this.setState({
        destinationListFilterData:
          this.props.destinationEstimatedCostListFilterData,
      });
    }
    if (
      this.props.destinationEstimatedCostListFilterData !==
        prevProps.destinationEstimatedCostListFilterData &&
      this.props.destinationEstimatedCostListFilterData !== undefined &&
      this.props.destinationEstimatedCostListFilterData !== null
    ) {
      this.setState({
        destinationListFilterData:
          this.props.destinationEstimatedCostListFilterData,
      });
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div
        className="filter-page-main-div"
        style={{ display: "flex", padding: "2%" }}
      >
        {/***************** ACCORDION START FROM HERE****************/}
        <div
          className="accordion-container"
          style={{ display: window.screen.width < 600 ? "none" : "block" }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                Search By Budget
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="0"
                  value="1000"
                  onChange={this.handleCheckboxCost}
                />
                Under 1000
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="1000"
                  value="3000"
                  onChange={this.handleCheckboxCost}
                />
                1K - 3K
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="3000"
                  value="10000"
                  onChange={this.handleCheckboxCost}
                />
                3K - 10K
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="10000"
                  value="50000"
                  onChange={this.handleCheckboxCost}
                />
                10K - 50K
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="50000"
                  value=""
                  onChange={this.handleCheckboxCost}
                />
                Above 50K
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                Search By Themes
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Checkbox
                  color="primary"
                  type="checkbox"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Monument"
                  onChange={this.handleCheckboxChange}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Monument</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Romantic"
                  onChange={this.handleCheckboxChange}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Romantic</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Beaches"
                  onChange={this.handleCheckboxChange}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Beaches</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Religious"
                  onChange={this.handleCheckboxChange}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Religious</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Adventure"
                  onChange={this.handleCheckboxChange}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Adventure</span>
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                Search By State
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Delhi"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Delhi</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Himachal Pradesh"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>
                  Himachal Pradesh
                </span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Punjab"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Punjab</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="UP"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>UP</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Bihar"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Bihar</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Kerala"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Kerala</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Jharkhand"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Jharkhand</span>
                <br />
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  name="Goa"
                  onChange={this.handleCheckboxState}
                />
                <span style={{ fontSize: 14, color: "gray" }}>Goa</span>
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/***************** HEADING OF PAGE ****************/}
        <div className="filter-product-and-header">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <h4
              style={{
                fontSize: window.screen.width > 540 ? "" : "14",
                marginLeft: window.screen.width > 540 ? "" : "3%",
              }}
            >
              Search Your Favourite Destination
            </h4>
            {/***************** SORT BUTTON START FROM HERE****************/}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    style={{ backgroundColor: "#4285F4", color: "white" }}
                  >
                    Sort Destination By
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        this.ascendingFilter();
                      }}
                    >
                      Budget-Low to High
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        this.descendingFilter();
                      }}
                    >
                      Budget-High to Low
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        this.popularityFilter();
                      }}
                    >
                      Popularity
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div
                style={{
                  display: window.screen.width > 600 ? "none" : "block",
                  marginLeft: "70px",
                }}
              >
                {/* <FilterButton/> */}
                <div>
                  {/* <div style={{height:80}}></div> */}
                  {/************ MODAL START FROM HERE   *********/}
                  <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      overflowY: "scroll",
                    }}
                  >
                    {/* <Paper style={{width:"60%" ,height:"auto" ,backgroundColor:"red" ,marginTop:"10%",marginLeft:"17%"}}> */}
                    <Paper
                      style={{
                        width: "60%",
                        height: "auto",
                        backgroundColor: "white",
                        marginTop: "8%",
                        marginLeft: "8%",
                        minWidth: 300,
                      }}
                    >
                      {/************ Accordions *********/}

                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography style={{ fontWeight: "bold" }}>
                            Search By Budget
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="0"
                              value="1000"
                              onChange={this.handleCheckboxCost}
                            />
                            Under 1000
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="1000"
                              value="3000"
                              onChange={this.handleCheckboxCost}
                            />
                            1K - 3K
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="3000"
                              value="10000"
                              onChange={this.handleCheckboxCost}
                            />
                            3K - 10K
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="10000"
                              value="50000"
                              onChange={this.handleCheckboxCost}
                            />
                            10K - 50K
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="50000"
                              value=""
                              onChange={this.handleCheckboxCost}
                            />
                            Above 50K
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3a-content"
                          id="panel3a-header"
                        >
                          <Typography style={{ fontWeight: "bold" }}>
                            Search By Themes
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <Checkbox
                              color="primary"
                              type="checkbox"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Monument"
                              onChange={this.handleCheckboxChange}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Monument
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Romantic"
                              onChange={this.handleCheckboxChange}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Romantic
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Beaches"
                              onChange={this.handleCheckboxChange}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Beaches
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Religious"
                              onChange={this.handleCheckboxChange}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Religious
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Adventure"
                              onChange={this.handleCheckboxChange}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Adventure
                            </span>
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3a-content"
                          id="panel3a-header"
                        >
                          <Typography style={{ fontWeight: "bold" }}>
                            Search By State
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Delhi"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Delhi
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Himachal Pradesh"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Himachal Pradesh
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Punjab"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Punjab
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="UP"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              UP
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Bihar"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Bihar
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Kerala"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Kerala
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Jharkhand"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Jharkhand
                            </span>
                            <br />
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                              name="Goa"
                              onChange={this.handleCheckboxState}
                            />
                            <span style={{ fontSize: 14, color: "gray" }}>
                              Goa
                            </span>
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <div style={{ textAlign: "right", margin: 10 }}>
                        <Button
                          color="primary"
                          onClick={() => this.handleClose()}
                        >
                          Close
                        </Button>
                      </div>
                    </Paper>
                  </Modal>
                  {/************ MOODAL OPEN BUTTON  *********/}
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#4285F4", color: "white" }}
                    onClick={this.handleOpen}
                  >
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {this.state.destinationListFilterData &&
            this.state.destinationListFilterData.map((data, i) => (
              <Card elevation={5} style={{ marginTop: 20 }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    {this.state.destinationListFilterData &&
                      this.state.destinationListFilterData[
                        i
                      ].destination_images.map((data, i) => {
                        if (i === 0) {
                          return (
                            <img
                              src={data.image}
                              alt={data.name}
                              style={{
                                height: "44vh",
                                width: window.screen.width > 1010 ? 550 : "99%",
                                padding: "6px",
                              }}
                            />
                          );
                        }
                      })}
                  </div>
                  <div
                    style={{
                      padding: 5,
                      marginLeft: window.screen.width > 540 ? "2%" : "3%",
                      width: window.screen.width > 540 ? "32%" : "",
                    }}
                  >
                    <span style={{ fontSize: "23px", fontWeight: "bold" }}>
                      {data.destination_name}
                    </span>
                    <br />
                    <LocationOnIcon
                      style={{ color: "blue", marginTop: "-3px" }}
                    />{" "}
                    <span style={{ fontSize: "20px" }}>
                      {data.city}, {data.state}
                    </span>
                    <br />
                    <div style={{ display: "flex", marginTop: 13 }}>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        Ratings:{" "}
                      </span>{" "}
                      <Rating
                        name="read-only"
                        value={data.ratings}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      Theme:{" "}
                    </span>{" "}
                    <span style={{ fontSize: "20px" }}> {data.theme}</span>
                    <br />
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      Activities:{" "}
                    </span>{" "}
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      {data.type_of_activities}
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      Estimated Cost:{" "}
                    </span>{" "}
                    <span style={{ fontSize: "20px" }}>
                      {" "}
                      &#x20b9; {data.estimated_cost}
                    </span>
                    <br />
                    {/* <div style={{ marginTop: 13 }}>
              <Button variant="contained" style={{ color: "white", backgroundColor: "#4285F4" }}
              onClick={()=>{this.props.history.push(`/Destination/${data.id}`)}}
              >
                Read More
              </Button> */}
                    <Button
                      style={{
                        backgroundColor: "#4285F4",
                        color: "white",
                        width: window.screen.width > 540 ? "100%" : "300px",
                        textTransform: "capitalize",
                        marginTop: 13,
                      }}
                      onClick={() => {
                        this.props.history.push(`/Destination/${data.id}`);
                      }}
                    >
                      Read More...
                    </Button>
                    {/* </div> */}
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    destinationPopularityListFilterData:
      state.destinationPopularity.destinationPopularityListFilterData,
    destinationListFilterData:
      state.destinationFilter.destinationListFilterData,
    destinationDescendingListFilterData:
      state.destinationDescendingFilter.destinationDescendingListFilterData,
    destinationThemeListFilterData:
      state.themeFilter.destinationThemeListFilterData,
    destinationStateListFilterData:
      state.stateFilter.destinationStateListFilterData,
    destinationEstimatedCostListFilterData:
      state.estimatedCostFilter.destinationEstimatedCostListFilterData,
  };
};
export default connect(mapStateToProps, {
  getDestinationFilterList,
  getDestinationDescendingFilterList,
  getDestinationPopularityFilterList,
  getThemeFilterList,
  getStateFilterList,
  getEstimatedCostFilterList,
})(DestinationListFilter);
