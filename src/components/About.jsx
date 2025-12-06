function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About BookNook</h2>
        <div className="about-grid">
          <div className="about-card">
            <i className="fas fa-book-open"></i>
            <h3>Curated Collection</h3>
            <p>Handpicked selection of books across various genres to suit every reader's taste.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-shipping-fast"></i>
            <h3>Fast Delivery</h3>
            <p>Get your books delivered to your doorstep within 3-5 business days.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-award"></i>
            <h3>Quality Guarantee</h3>
            <p>All books are brand new and carefully inspected before shipping.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Our customer support team is always ready to assist you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;