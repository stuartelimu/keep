import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup
} from "react-bootstrap";
import logo from "./logo.svg";
import "font-awesome/css/font-awesome.min.css";

function NavigationBar(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Stue's Keep
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-5 pl-2">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <i className="fa fa-search" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Search" className="mr-sm-2" />
          </InputGroup>
        </Form>

        <Nav className="ml-auto">
          <Nav.Link href="#home" onClick={props.handleCreate}>
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
          </Nav.Link>
          <Nav.Link href="#link">
            <i className="fa fa-cog"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
