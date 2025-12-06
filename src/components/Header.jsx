import { useState, useEffect } from 'react';

function Header({ cartCount, cartItems, removeFromCart, updateQuantity, calculateTotal, setShowCheckout, searchTerm, setSearchTerm, isLoggedIn, setIsLoggedIn }) {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
    alert('Login successful! Welcome back.');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsRegisterMode(false);
    alert('Registration successful! Please check your email.');
  };

  const handleCheckoutClick = () => {
    if (!isLoggedIn) {
      setShowCart(false);
      setShowLogin(true);
      alert('Please login to proceed to checkout.');
      return;
    }
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully.');
  };

  return (
    <header>
      <div className="container header-container">
        <h1 className="logo">Book<span>Nook</span></h1>
        
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#books">Browse Collection</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search books..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
          
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              transition: 'all 0.3s'
            }}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          
          <div className="login-wrapper" style={{ position: 'relative' }}>
            {isLoggedIn ? (
              <button className="btn-user" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            ) : (
              <button 
                className="btn-login" 
                onClick={() => {
                  setShowLogin(!showLogin);
                  setShowCart(false);
                }}
              >
                <i className="fas fa-user"></i> Login
              </button>
            )}
            
            {showLogin && !isLoggedIn && (
              <div className="login-dropdown" style={{
                position: 'absolute',
                top: '45px',
                right: '0',
                width: '320px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 5px 20px rgba(62, 39, 35, 0.15)',
                zIndex: '1001',
                border: '1px solid #D7CCC8'
              }}>
                <div className="login-header" style={{
                  padding: '15px 20px',
                  borderBottom: '1px solid #D7CCC8',
                  background: '#f9f9f9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '8px 8px 0 0'
                }}>
                  <h4 style={{ margin: '0', color: '#3E2723', fontSize: '16px', fontWeight: '600' }}>
                    {isRegisterMode ? 'Create Account' : 'Login to BookNook'}
                  </h4>
                  <button 
                    className="close-login" 
                    onClick={() => setShowLogin(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#3E2723',
                      fontSize: '24px',
                      cursor: 'pointer',
                      padding: '0',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ×
                  </button>
                </div>
                
                <div className="login-content" style={{ padding: '20px' }}>
                  <form onSubmit={isRegisterMode ? handleRegisterSubmit : handleLoginSubmit}>
                    {isRegisterMode && (
                      <div className="login-form-group" style={{ marginBottom: '15px' }}>
                        <input 
                          type="text" 
                          placeholder="Full Name" 
                          className="login-input"
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #D7CCC8',
                            borderRadius: '6px',
                            fontSize: '14px',
                            background: '#faf9f8',
                            color: '#3E2723',
                            boxSizing: 'border-box'
                          }}
                          required 
                        />
                      </div>
                    )}
                    
                    <div className="login-form-group" style={{ marginBottom: '15px' }}>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="login-input"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #D7CCC8',
                          borderRadius: '6px',
                          fontSize: '14px',
                          background: '#faf9f8',
                          color: '#3E2723',
                          boxSizing: 'border-box'
                        }}
                        required 
                      />
                    </div>
                    
                    <div className="login-form-group" style={{ marginBottom: '15px' }}>
                      <input 
                        type="password" 
                        placeholder="Password" 
                        className="login-input"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #D7CCC8',
                          borderRadius: '6px',
                          fontSize: '14px',
                          background: '#faf9f8',
                          color: '#3E2723',
                          boxSizing: 'border-box'
                        }}
                        required 
                      />
                    </div>
                    
                    {isRegisterMode && (
                      <div className="login-form-group" style={{ marginBottom: '15px' }}>
                        <input 
                          type="password" 
                          placeholder="Confirm Password" 
                          className="login-input"
                          style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #D7CCC8',
                            borderRadius: '6px',
                            fontSize: '14px',
                            background: '#faf9f8',
                            color: '#3E2723',
                            boxSizing: 'border-box'
                          }}
                          required 
                        />
                      </div>
                    )}
                    
                    <button 
                      type="submit" 
                      className="login-btn"
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: '#8D6E63',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '15px',
                        transition: 'background 0.3s',
                        marginTop: '10px'
                      }}
                    >
                      {isRegisterMode ? 'Create Account' : 'Login'}
                    </button>
                    
                    <div className="login-switch" style={{
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#5D4037',
                      marginTop: '15px'
                    }}>
                      {isRegisterMode ? (
                        <p>
                          Already have an account?{' '}
                          <span 
                            className="login-switch-link"
                            onClick={() => setIsRegisterMode(false)}
                            style={{
                              color: '#8D6E63',
                              cursor: 'pointer',
                              fontWeight: '500',
                              textDecoration: 'underline'
                            }}
                          >
                            Login here
                          </span>
                        </p>
                      ) : (
                        <p>
                          Don't have an account?{' '}
                          <span 
                            className="login-switch-link"
                            onClick={() => setIsRegisterMode(true)}
                            style={{
                              color: '#8D6E63',
                              cursor: 'pointer',
                              fontWeight: '500',
                              textDecoration: 'underline'
                            }}
                          >
                            Sign up
                          </span>
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          
          <div className="cart-wrapper">
            <div className="cart-icon" onClick={() => {
              setShowCart(!showCart);
              setShowLogin(false);
            }}>
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            
            {showCart && cartItems.length > 0 && (
              <div className="cart-dropdown" style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                width: '400px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 5px 20px rgba(62, 39, 35, 0.15)',
                zIndex: '100',
                border: '1px solid #D7CCC8'
              }}>
                <div className="cart-header" style={{
                  padding: '15px 20px',
                  borderBottom: '1px solid #D7CCC8',
                  background: '#f9f9f9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderRadius: '8px 8px 0 0'
                }}>
                  <h4 style={{ margin: '0', color: '#3E2723', fontSize: '16px', fontWeight: '600' }}>
                    Your Cart ({cartCount} item{cartCount !== 1 ? 's' : ''})
                  </h4>
                  <button 
                    className="close-cart" 
                    onClick={() => setShowCart(false)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#3E2723',
                      fontSize: '24px',
                      cursor: 'pointer',
                      padding: '0',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ×
                  </button>
                </div>
                
                <div className="cart-items-container" style={{
                  maxHeight: '300px',
                  overflowY: 'auto',
                  padding: '10px 20px'
                }}>
                  {cartItems.map(item => (
                    <div className="cart-item" key={item.id} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid #EFEBE9'
                    }}>
                      <div className="cart-item-details" style={{ flex: '1', minWidth: '0' }}>
                        <div className="cart-item-title" style={{
                          fontWeight: '600',
                          color: '#3E2723',
                          fontSize: '15px',
                          marginBottom: '5px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {item.title}
                        </div>
                        <div className="cart-item-info" style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '14px',
                          color: '#666'
                        }}>
                          <span className="cart-item-price">{item.price} each</span>
                          <span className="cart-item-total" style={{ fontWeight: 'bold', color: '#3E2723' }}>
                            Rs. {(parseFloat(item.price.replace('Rs. ', '').replace(',', '')) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="cart-controls" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginLeft: '10px'
                      }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            background: '#F5F5F5',
                            border: '1px solid #D7CCC8',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                            color: item.quantity <= 1 ? '#BDBDBD' : '#3E2723',
                            borderRadius: '3px'
                          }}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        
                        <span style={{
                          minWidth: '30px',
                          textAlign: 'center',
                          display: 'inline-block',
                          fontWeight: 'bold',
                          color: '#e53935',
                          fontSize: '15px',
                          padding: '0 5px'
                        }}>
                          {item.quantity}
                        </span>
                        
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            background: '#F5F5F5',
                            border: '1px solid #D7CCC8',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            color: '#3E2723',
                            borderRadius: '3px'
                          }}
                        >
                          +
                        </button>
                        
                        <button 
                          className="remove-btn" 
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#D32F2F',
                            cursor: 'pointer',
                            marginLeft: '10px',
                            fontSize: '16px'
                          }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="cart-summary" style={{
                  marginTop: '15px',
                  padding: '20px',
                  paddingTop: '15px',
                  borderTop: '2px solid #EFEBE9',
                  background: '#f9f9f9',
                  borderRadius: '0 0 8px 8px'
                }}>
                  <div className="cart-line" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '8px 0',
                    fontSize: '15px',
                    color: '#3E2723'
                  }}>
                    <span>Subtotal:</span>
                    <span>Rs. {calculateTotal().subtotal}</span>
                  </div>
                  <div className="cart-line" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '8px 0',
                    fontSize: '15px',
                    color: '#3E2723'
                  }}>
                    <span>Shipping:</span>
                    <span>
                      {parseFloat(calculateTotal().subtotal) >= 2000 ? (
                        <span style={{color: 'green', fontWeight: 'bold'}}>FREE</span>
                      ) : (
                        `Rs. ${calculateTotal().shipping}`
                      )}
                    </span>
                  </div>
                  <div className="cart-line total" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '8px 0',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#3E2723'
                  }}>
                    <span>Total:</span>
                    <span>Rs. {calculateTotal().total}</span>
                  </div>
                  <button 
                    className="btn" 
                    onClick={handleCheckoutClick}
                    style={{
                      width: '100%',
                      marginTop: '15px',
                      background: '#8D6E63',
                      color: '#fff',
                      padding: '10px 25px',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '15px',
                      transition: 'background 0.3s'
                    }}
                  >
                    {isLoggedIn ? 'Checkout' : 'Login to Checkout'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;