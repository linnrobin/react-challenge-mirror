import React from 'react'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar fixed="top" bg="dark" variant="dark" style={{position: 'sticky'}}>
                <Navbar.Brand href="#home">Hacktiv8Movies</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#favorites">Favorites</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}