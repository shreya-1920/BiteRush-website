import { useState } from "react";
import "../assets/styles/auth.css";


function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-left">
        <h1>BiteRush</h1>

        <h2>Every Bite, Worth The Rush</h2>

        <p>
          Discover restaurants, explore cuisines,
          and get food delivered to your doorstep.
        </p>

        <div className="food-icons">
          🍕 🍔 🍟
        </div>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <div className="auth-toggle">
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>

          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
        </div>

        {!isLogin ? (
          <>
            <h2>Create Account</h2>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button className="auth-btn">
              Create Account
            </button>
          </>
        ) : (
          <>
            <h2>Welcome Back</h2>

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button className="auth-btn">
              Login
            </button>

            <p className="forgot">
              Forgot Password?
            </p>
          </>
        )}
        
      </div>
    </div>
  );
}

export default AuthPage;