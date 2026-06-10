import "./LoginModal.css";

function LoginModal({ setShowLogin }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <button
          className="close-btn"
          onClick={() => setShowLogin(false)}
        >
          X
        </button>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>

      </div>
    </div>
  );
}

export default LoginModal;