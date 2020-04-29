import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" style={{ position: "sticky" }}>
      <Navbar.Brand>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Hacktiv8Movies
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Link to="/">Home</Link> |<Link to="/movies/545609">545609</Link> */}
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}
export default Navigation;
