import { useState } from "react";
import { loginUser, forgotPassword } from "../../services/AuthServices";

function LoginModal({ setShowLogin, setShowReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      console.log(response.data);

      alert(response.data.message);

      setShowLogin(false);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await forgotPassword({
        email,
      });

      alert(response.data.message);
    } catch (error) {
      console.error(error);

      alert("Failed");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        zIndex: 9999,
        minWidth: "350px",
      }}
    >
      <button
        onClick={() => setShowLogin(false)}
      >
        X
      </button>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>

      <br />
      <br />

      <button
        onClick={handleForgotPassword}
      >
        Forgot Password?
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          setShowLogin(false);
          setShowReset(true);
        }}
      >
        Reset Password
      </button>
    </div>
  );
}

export default LoginModal;