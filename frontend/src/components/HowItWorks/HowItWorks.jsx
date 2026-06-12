import "../../assets/styles/HowItWorks.css";
import {
  FaStore,
  FaHamburger,
  FaMotorcycle,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="how-overlay"></div>

      <div className="how-content">

        <p className="how-subtitle">
          Order Food In Minutes
        </p>

        <h2>
          HOW BITERUSH WORKS
        </h2>

        <div className="steps-container">

          <div className="step-card">
            <div className="step-icon">
              <FaStore />
              <span>1</span>
            </div>

            <h3>
              Explore Restaurants
            </h3>

            <p>
              Browse top-rated restaurants,
              cafes and food outlets near you.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <FaHamburger />
              <span>2</span>
            </div>

            <h3>
              Choose Your Meal
            </h3>

            <p>
              Select dishes from menus and
              customize your order easily.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <FaMotorcycle />
              <span>3</span>
            </div>

            <h3>
              Track Your Order
            </h3>

            <p>
              Get live order updates and
              receive food at your doorstep.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;