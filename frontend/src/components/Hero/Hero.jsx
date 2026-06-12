import clouds from "../../assets/images/clouds png.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">
          🍔 Fast • Fresh • Delivered
        </span>

        <h1>
          Discover Great Food,
          <br />
          Delivered Faster.
        </h1>

        <p>
          Explore top-rated restaurants, trending dishes,
          and exclusive offers from the best restaurants
          near you—all delivered fresh to your doorstep.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search restaurants, dishes, cuisines..."
          />

          <input
            type="text"
            placeholder="Enter your location"
          />

          <button>
            Search
          </button>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Order Now
          </button>

          <button className="secondary-btn">
            Explore Restaurants
          </button>
        </div>
      </div>

      {/* CLOUD DIVIDER */}
      <div className="hero-clouds">
        <img src={clouds} alt="cloud divider" />
      </div>
    </section>
  );
}

export default Hero;