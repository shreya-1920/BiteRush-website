import "../../assets/styles/Navbar.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(
        JSON.parse(storedUser)
      );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    alert("Logged Out");

    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        BiteRush
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Restaurants</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">Offers</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <div className="nav-right">

        <div className="cart">
          <FaShoppingBasket />
          <span className="cart-badge">0</span>
        </div>

        {user ? (
          <>
            <span
              style={{
                marginRight: "15px",
                fontWeight: "600",
              }}
            >
              Hi, {user.name}
            </span>

            <button
              className="register-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="login-btn"
              onClick={() =>
                navigate("/auth")
              }
            >
              Sign In
            </button>

            <button
              className="register-btn"
              onClick={() =>
                navigate("/auth")
              }
            >
              Register
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;