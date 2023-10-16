import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CarritoDeCompras } from './CartWidget';

export const NavBar = ( ) => {
    return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">OrganiChic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
            <NavDropdown title="Clothes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Children
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Men</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sale
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CarritoDeCompras/>
      </Container>
    </Navbar>
    
    </>


    )
}