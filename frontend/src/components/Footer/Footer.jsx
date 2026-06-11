import "../../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>BiteRush</h2>
        <p>Every Bite, Worth The Rush</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>

        <p>Home</p>
        <p>Restaurants</p>
        <p>Contact</p>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>

        <p>support@biterush.com</p>
        <p>+91 9876543210</p>
      </div>

      <div className="footer-bottom">
        © 2026 BiteRush. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;