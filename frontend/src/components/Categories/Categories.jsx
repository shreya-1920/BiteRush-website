import "../../assets/styles/Categories.css";

function Categories() {
  const categories = [
    "🍕 Pizza",
    "🍔 Burgers",
    "🍜 Asian",
    "🍰 Desserts",
    "🥗 Healthy",
  ];

  return (
    <section className="categories">
      <h2>Popular Categories</h2>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;