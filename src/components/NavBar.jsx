import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CarritoDeCompras } from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const navbarStyle = {
    backgroundColor:'#FCF3CF',
    fontSize: '22px',
    borderBottom: '0.5px solid #000'
    
  };
  return (
    <>
      <Navbar expand="lg" style={navbarStyle} >
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="#home">OrganiChic</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/sostenibilidad">Sostenibilidad</Nav.Link>
              <Nav.Link href="/materiales">Materiales</Nav.Link>
              <NavDropdown title="Clothes" id="basic-nav-dropdown">
                <Link to={`/category/${'women'}`}>
                </Link>  
              <NavDropdown.Item href="/category/women">Women</NavDropdown.Item>
              <NavDropdown.Item href="/category/children">Children</NavDropdown.Item>
              <NavDropdown.Item href="/category/men">Men</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CarritoDeCompras />
        </Container>
      </Navbar>
    </>
  );
};
