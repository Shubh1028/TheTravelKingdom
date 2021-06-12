import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export class Head extends Component {
    render() {
        return (
            <div>
                  <Navbar
          collapseOnSelect
          expand='md'
          bg="#4285F4"
          className="color-nav"
          variant="dark"
          fixed="top"
          style={{ backgroundColor: "black" }}
        >
          <Navbar.Brand>
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ marginLeft: window.screen.width >1024 ? "24%": "0px" }}
          >
            <Nav className="mr-auto">
             
               <InputGroup className="mb-3" style={{borderRadius: "200px"}}>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
              </Nav>

            <div style={{display:"flex"}}>
              <Nav>
                  <Nav.Link
                    className="nav-link active"
                    style={{ marginRight: "10px", fontSize:"18px" }}
                  >
                    Login/Signup
                  </Nav.Link>
                </Nav>
            </div>
           
          </Navbar.Collapse>
        </Navbar>
            </div>
        )
    }
}

export default Head
