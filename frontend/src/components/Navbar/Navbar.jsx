import { Link } from "react-router-dom";
import "../../assets/styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        BiteRush
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-buttons">
        <Link to="/auth">
          <button className="login-btn">
            Sign In
          </button>
        </Link>

        <Link to="/auth">
          <button className="register-btn">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;