import { useState } from "react";
import {
  loginUser,
  registerUser,
  forgotPassword,
} from "../services/AuthServices";

import ResetPasswordModal from "../components/auth/ResetPasswordModal";
import "../assets/styles/auth.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [showReset, setShowReset] = useState(false);  

  const handleLogin = async () => {
    try {
      console.log("Login Clicked");

      const response = await loginUser({
        email,
        password,
      });

      console.log(response.data);

      alert(response.data.message);
    } catch (error) {
      console.error(error);

      alert("Login Failed");
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      console.log("Register Clicked");

      const response = await registerUser({
        username,
        email,
        password,
      });

      console.log(response.data);

      alert(response.data.message);
    } catch (error) {
      console.error(error);

      alert("Registration Failed");
    }
  };
  const handleForgotPassword = async () => {
  if (!email) {
    alert("Please enter your email first");
    return;
  }

  try {
    const response = await forgotPassword({
      email,
    });

    alert(response.data.message);
  } catch (error) {
    console.error(error);
    alert("Failed to send reset link");
  }
};

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
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />

            <button
              className="auth-btn"
              onClick={handleRegister}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h2>Welcome Back</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              className="auth-btn"
              onClick={handleLogin}
            >
              Login
            </button>

            <p
  className="forgot"
  onClick={handleForgotPassword}
  style={{ cursor: "pointer" }}
>
  Forgot Password?
</p>

<p
  className="forgot"
  onClick={() => setShowReset(true)}
  style={{ cursor: "pointer" }}
>
  Reset Password
</p>
{showReset && (
  <ResetPasswordModal
    setShowReset={setShowReset}
  />
)}
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;