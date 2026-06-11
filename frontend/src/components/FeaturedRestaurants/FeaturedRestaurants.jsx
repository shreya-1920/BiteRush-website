import "../../assets/styles/FeaturedRestaurants.css";

function FeaturedRestaurants() {
  const restaurants = [
    {
      name: "Burger Hub",
      rating: "4.8",
      time: "25 min",
    },
    {
      name: "Pizza Palace",
      rating: "4.7",
      time: "30 min",
    },
    {
      name: "Spice Kitchen",
      rating: "4.9",
      time: "20 min",
    },
  ];

  return (
    <section className="featured">
      <h2>Featured Restaurants</h2>

      <div className="restaurant-grid">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <div className="restaurant-image">
              🍔
            </div>

            <h3>{restaurant.name}</h3>

            <p>⭐ {restaurant.rating}</p>

            <p>⏱ {restaurant.time}</p>

            <button>View Menu</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedRestaurants;