import "../../assets/styles/Categories.css";

function Categories() {

  const categories = [
    {
      icon: "🍕",
      name: "Pizza"
    },
    {
      icon: "🍔",
      name: "Burgers"
    },
    {
      icon: "🍜",
      name: "Asian"
    },
    {
      icon: "🍰",
      name: "Desserts"
    },
    {
      icon: "🥗",
      name: "Healthy"
    },
    {
      icon: "🌮",
      name: "Mexican"
    }
  ];

  return (
    <section className="categories">

      <span className="section-tag">
        Popular Choices
      </span>

      <h2>
        Explore Food Categories
      </h2>

      <p className="categories-subtitle">
        Discover your favorite cuisines and find
        delicious meals from top-rated restaurants.
      </p>

      <div className="categories-grid">

        {categories.map((category, index) => (

          <div
            className="category-card"
            key={index}
          >

            <div className="category-icon">
              {category.icon}
            </div>

            <h3>
              {category.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;