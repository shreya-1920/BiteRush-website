import "../../assets/styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Every Bite,
          <br />
          Worth The Rush
        </h1>

        <p>
          Discover the best restaurants near you
          and get your favorite meals delivered
          quickly.
        </p>

        <div className="hero-buttons">
          <button className="order-btn">
            Order Now
          </button>

          <button className="explore-btn">
            Explore Restaurants
          </button>
        </div>
      </div>

      <div className="hero-right">
        🍕 🍔 🍟
      </div>
    </section>
  );
}

export default Hero;