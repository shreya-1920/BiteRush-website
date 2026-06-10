import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import LoginModal from "../components/LoginModal/LoginModal";
import RegisterModal from "../components/RegisterModal/RegisterModal";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      <Hero />

      {showLogin && (
        <LoginModal setShowLogin={setShowLogin} />
      )}

      {showRegister && (
        <RegisterModal setShowRegister={setShowRegister} />
      )}
    </>
  );
}

export default Home;