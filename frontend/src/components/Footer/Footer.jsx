function Footer() {
  return (
    <footer className="footer">

      {/* Newsletter Section */}
      <div className="newsletter">
        <h2>
          Our Weekly <span>Newsletter</span>
        </h2>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>Subscribe</button>
        </div>
      </div>

      <hr />

      {/* Main Footer Content */}
      <div className="footer-content">

        <div className="footer-column">
          <h3>BiteRush</h3>

          <p>
            Discover top-rated restaurants and
            enjoy fast delivery right at your
            doorstep.
          </p>

          <p>📍 Gwalior, Madhya Pradesh</p>
          <p>📞 +91 9876543210</p>
        </div>

        <div className="footer-column">
          <h3>Popular Categories</h3>

          <p>🍕 Pizza</p>
          <p>🍔 Burgers</p>
          <p>🍜 Chinese</p>
          <p>🥘 Indian</p>
        </div>

        <div className="footer-column">
          <h3>Service Hours</h3>

          <p>Monday - Friday</p>
          <p>9:00 AM - 11:00 PM</p>

          <br />

          <p>Saturday - Sunday</p>
          <p>10:00 AM - 12:00 AM</p>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>support@biterush.com</p>
          <p>help@biterush.com</p>

          <button className="footer-btn">
            Contact Support
          </button>
        </div>

      </div>

      {/* Logo + Navigation */}
      <div className="footer-center">

        <h2>BiteRush</h2>

        <div className="footer-links">
          <span>Home</span>
          <span>Restaurants</span>
          <span>Categories</span>
          <span>Offers</span>
          <span>Contact</span>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        Copyright © 2026 BiteRush. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;