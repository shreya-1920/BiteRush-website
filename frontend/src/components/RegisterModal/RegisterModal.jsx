function RegisterModal({ setShowRegister }) {
  return (
    <div>
      <button onClick={() => setShowRegister(false)}>
        X
      </button>

      <h2>Register</h2>

      <input type="text" placeholder="Name" />

      <br /><br />

      <input type="email" placeholder="Email" />

      <br /><br />

      <input type="password" placeholder="Password" />

      <br /><br />

      <button>Register</button>
    </div>
  );
}

export default RegisterModal;