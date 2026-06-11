import "../../assets/styles/StatsCounter.css";

function StatsCounter() {
  return (
    <section className="stats">
      <div className="stat-card">
        <h2>500+</h2>
        <p>Restaurants</p>
      </div>

      <div className="stat-card">
        <h2>20K+</h2>
        <p>Orders Delivered</p>
      </div>

      <div className="stat-card">
        <h2>10K+</h2>
        <p>Happy Customers</p>
      </div>

      <div className="stat-card">
        <h2>50+</h2>
        <p>Cities Served</p>
      </div>
    </section>
  );
}

export default StatsCounter;