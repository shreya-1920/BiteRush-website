import { useState } from "react";
import { loginUser, forgotPassword } from "../../services/AuthServices";

function LoginModal({ setShowLogin, setShowReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      alert(response.data.message);
      setShowLogin(false);
    } catch (error) {
      alert("Login Failed");
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await forgotPassword({ email });
      alert(response.data.message);
    } catch (error) {
      alert("Failed");
    }
  };

  return (
    <div>
      <button onClick={() => setShowLogin(false)}>X</button>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>

      <br />
      <br />

  <button onClick={handleForgotPassword}>
    Forgot Password?
  </button>

  <br /><br />

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
