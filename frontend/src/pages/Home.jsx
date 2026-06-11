import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import LoginModal from "../components/auth/LoginModal";
import RegisterModal from "../components/auth/RegisterModal";
import ResetPasswordModal from "../components/auth/ResetPasswordModal";
import { logoutUser } from "../services/AuthServices";
import StatsCounter from "../components/StatsCounter/StatsCounter";
import FeaturedRestaurants from "../components/FeaturedRestaurants/FeaturedRestaurants";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();

      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      {/* <button onClick={handleLogout}>
        Logout
      </button> */}

      <Hero />
      <StatsCounter />
      <Categories />
      <FeaturedRestaurants />
      <Footer />

      {showLogin && (
        <LoginModal
          setShowLogin={setShowLogin}
          setShowReset={setShowReset}
        />
      )}

      {showRegister && (
        <RegisterModal
          setShowRegister={setShowRegister}
        />
      )}

      {showReset && (
        <ResetPasswordModal
          setShowReset={setShowReset}
        />
      )}
    </>
  );
}

export default Home;
