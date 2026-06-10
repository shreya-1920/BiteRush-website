function Navbar({ setShowLogin, setShowRegister }) {
  return (
    <nav>
      <h2>BiteRush</h2>

      <button onClick={() => setShowLogin(true)}>
        Login
      </button>

      <button onClick={() => setShowRegister(true)}>
        Register
      </button>
    </nav>
  );
}

export default Navbar;