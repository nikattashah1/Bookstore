function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BookNook</h3>
            <p>Your favorite online bookstore for amazing reads. Discover, learn, and grow with us.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#books">Browse Books</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-section">
            <h3>Categories</h3>
            <a href="#books">Self-Help</a>
            <a href="#books">Finance</a>
            <a href="#books">Fiction</a>
            <a href="#books">Business</a>
            <a href="#books">Classics</a>
          </div>
        </div>
        
        <div className="copyright">
          <p>© 2025 BookNook. All rights reserved. | Designed with ❤️ for book lovers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;