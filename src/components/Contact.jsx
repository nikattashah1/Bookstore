import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(true);
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            {/* CHANGED: Added Nepali contact info */}
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Kathmandu, Nepal | +977-9801234567</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+977-9801234567 | 01-1234567</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>contact@booknook.com | info@booknook.com.np</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Sunday-Friday: 10AM-7PM | Saturday: 10AM-5PM</span>
            </div>
          </div>
          
          <div className="newsletter">
            <h3>Join Our Newsletter</h3>
            <p>Get updates on new books, exclusive deals, and reading recommendations</p>
            
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
              />
              <button type="submit">Subscribe</button>
            </form>
            
            {error && (
              <p style={{color: '#d32f2f', fontSize: '14px', marginTop: '10px', textAlign: 'center'}}>
                <i className="fas fa-exclamation-circle"></i> {error}
              </p>
            )}
            
            {isSubscribed && (
              <div style={{
                background: '#e8f5e9',
                color: '#2e7d32',
                padding: '12px',
                borderRadius: '6px',
                marginTop: '15px',
                textAlign: 'center',
                borderLeft: '4px solid #4caf50'
              }}>
                <i className="fas fa-check-circle"></i> Thank you! You've been subscribed.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;