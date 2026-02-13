import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import './AppNavbar.css'; // 

const AppNavbar = () => {
  return (
    //<Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg navbar-custom sticky-top">
    <Navbar 
      expand="lg" 
      className="navbar-light-custom shadow-sm sticky-top"
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-gradient fw-bold fs-3">
          Imran Ali
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom mx-2">About</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-link-custom mx-2">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom mx-2">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;