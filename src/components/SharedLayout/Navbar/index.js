import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/">
              <span className="nav-link"> Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/zoo">
              <span className="nav-link"> Zoo</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/addAnimal">
              <span className="nav-link"> AddAnimal</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
