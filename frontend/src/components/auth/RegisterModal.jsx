import { useState } from "react";
import { registerUser } from "../../services/AuthServices";

function RegisterModal({ setShowRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await registerUser({
        username,
        email,
        password,
      });

      console.log(response.data);

      alert("Registration Successful");

      setShowRegister(false);
    } catch (error) {
      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div>
      <button onClick={() => setShowRegister(false)}>
        X
      </button>

      <h2>Register</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default RegisterModal;