import { NavLink } from "react-router-dom";
import { Navbar as NavbarBs, Nav } from "react-bootstrap";
const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/zoo" as={NavLink}>
          Zoo
        </Nav.Link>
        <Nav.Link to="/addAnimal" as={NavLink}>
          Add Animal
        </Nav.Link>
      </Nav>
    </NavbarBs>
  );
};
export default Navbar;
