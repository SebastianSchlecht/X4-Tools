import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../css/Header.css";

const AppHeader: React.FC = () => {
  return (
    <Navbar
      bg="navbar navbar-expand navbar-dark flex-column flex-md-row bg-secondary shadow"
      expand="lg"
    >
      {/* <Container> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link><NavLink className='nav-link'to='/station'>Station Calculator</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/test'>Test page</NavLink></Nav.Link>
                        <Nav.Link>Not working</Nav.Link> */}
          <NavLink className="nav-link" to="/station">
            Station Calculator
          </NavLink>
          <NavLink className="nav-link" to="/test">
            Test page
          </NavLink>
          <Nav.Link>Not working</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default AppHeader;
