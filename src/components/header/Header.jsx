import { NavLink } from "react-router";
import './header.css'

const Header = () => {
  return (
    <>
      <nav className="header">
        <li>

        <NavLink to="/" end>
          Home
        </NavLink>
        </li>
        <li>
        <NavLink to="/books" end>
        Book list
        </NavLink>
        </li>
        <li>
        <NavLink to="/demo">Demo</NavLink>
        </li>
        <li>
        <NavLink to="/dynamic/Somererefgefef">Dynamic</NavLink>
        </li>
      </nav>
    </>
  );
};
export default Header;
