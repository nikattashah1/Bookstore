import { useState } from 'react';

function Checkout({ cartItems, cartTotal, clearCart, setShowCheckout }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    payment: 'cash',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.payment === 'card' && !form.cardNumber) {
      alert('Please enter card details for card payment');
      return;
    }
    
    setOrderComplete(true);
    setTimeout(() => {
      clearCart();
      setShowCheckout(false);
      alert('Order placed successfully! Thank you for shopping with BookNook.');
    }, 3000);
  };

  if (orderComplete) {
    return (
      <div className="checkout-overlay">
        <div className="checkout-modal">
          <div className="success-screen">
            <i className="fas fa-check-circle" style={{color: '#4caf50', fontSize: '60px', marginBottom: '20px'}}></i>
            <h2 style={{color: '#3E2723', marginBottom: '15px'}}>Order Successful!</h2>
            <p style={{color: '#5D4037', marginBottom: '10px', fontSize: '16px'}}>Your order is confirmed and will be shipped soon.</p>
            <p style={{color: '#5D4037', marginBottom: '10px', fontSize: '16px'}}>Total paid: Rs. {cartTotal.total}</p>
            <p style={{color: '#5D4037', marginBottom: '20px', fontSize: '16px'}}>Thank you for shopping with BookNook!</p>
            <button 
              className="btn btn-primary" 
              onClick={() => setShowCheckout(false)}
              style={{
                background: '#3E2723',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '15px'
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">
        <div className="checkout-header" style={{
          background: '#3E2723',
          color: 'white',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '10px 10px 0 0'
        }}>
          <h2>Complete Your Order</h2>
          <button 
            className="close-btn" 
            onClick={() => setShowCheckout(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>

        <div className="checkout-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          padding: '30px'
        }}>
          <div className="order-summary" style={{
            background: '#EFEBE9',
            padding: '25px',
            borderRadius: '8px',
            border: '1px solid #D7CCC8'
          }}>
            <h3 style={{
              color: '#3E2723',
              marginBottom: '20px',
              paddingBottom: '10px',
              borderBottom: '2px solid #D7CCC8'
            }}>Your Book Order</h3>
            
            {cartItems.map(item => (
              <div className="order-item" key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 0',
                borderBottom: '1px solid #D7CCC8'
              }}>
                <div className="item-info">
                  <div className="item-title" style={{fontWeight: '500', color: '#3E2723'}}>{item.title}</div>
                  <div className="item-details">
                    <span className="item-price-quantity" style={{color: '#666'}}>
                      {item.price} × {item.quantity}
                    </span>
                  </div>
                </div>
                <div className="item-total" style={{fontWeight: '600', color: '#3E2723'}}>
                  Rs. {(parseFloat(item.price.replace('Rs. ', '').replace(',', '')) * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            
            <div className="shipping-note" style={{
              background: '#e8f5e9',
              color: '#2e7d32',
              padding: '12px',
              borderRadius: '6px',
              margin: '20px 0',
              fontSize: '14px',
              borderLeft: '4px solid #4caf50'
            }}>
              <i className="fas fa-shipping-fast" style={{marginRight: '10px'}}></i>
              Free shipping on orders over Rs. 2000
            </div>
            
            <div className="total-line" style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
              fontSize: '16px',
              color: '#3E2723'
            }}>
              <span>Subtotal</span>
              <span>Rs. {cartTotal.subtotal}</span>
            </div>
            
            <div className="total-line" style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
              fontSize: '16px',
              color: '#3E2723'
            }}>
              <span>Shipping</span>
              <span>
                {parseFloat(cartTotal.subtotal) >= 2000 ? (
                  <span style={{color: 'green', fontWeight: 'bold'}}>FREE</span>
                ) : (
                  `Rs. ${cartTotal.shipping}`
                )}
              </span>
            </div>
            
            <div className="total-line grand-total" style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#3E2723',
              marginTop: '15px',
              paddingTop: '15px',
              borderTop: '2px solid #D7CCC8'
            }}>
              <span>Total to Pay</span>
              <span>Rs. {cartTotal.total}</span>
            </div>
          </div>

          <form className="checkout-form" onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            <h3 style={{color: '#3E2723'}}>Your Details</h3>
            
            <div className="form-group" style={{marginBottom: '20px'}}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#3E2723'
              }}>Full Name *</label>
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D7CCC8',
                  borderRadius: '6px',
                  fontSize: '15px',
                  background: '#faf9f8'
                }}
              />
            </div>
            
            <div className="form-group" style={{marginBottom: '20px'}}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#3E2723'
              }}>Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                value={form.phone} 
                onChange={handleChange} 
                placeholder="+977-98XXXXXXXX" 
                required 
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D7CCC8',
                  borderRadius: '6px',
                  fontSize: '15px',
                  background: '#faf9f8'
                }}
              />
            </div>
            
            <div className="form-group" style={{marginBottom: '20px'}}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#3E2723'
              }}>Address *</label>
              <input 
                type="text" 
                name="address" 
                value={form.address} 
                onChange={handleChange} 
                placeholder="Your complete address" 
                required 
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D7CCC8',
                  borderRadius: '6px',
                  fontSize: '15px',
                  background: '#faf9f8'
                }}
              />
            </div>
            
            <div className="form-group" style={{marginBottom: '20px'}}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#3E2723'
              }}>City *</label>
              <input 
                type="text" 
                name="city" 
                value={form.city} 
                onChange={handleChange} 
                placeholder="Your city" 
                required 
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #D7CCC8',
                  borderRadius: '6px',
                  fontSize: '15px',
                  background: '#faf9f8'
                }}
              />
            </div>

            <h3 style={{color: '#3E2723'}}>Payment Method</h3>
            
            <div className="payment-options" style={{marginTop: '20px'}}>
              <div 
                className={`payment-option ${form.payment === 'cash' ? 'selected' : ''}`}
                onClick={() => setForm({...form, payment: 'cash'})}
                style={{
                  border: `2px solid ${form.payment === 'cash' ? '#8D6E63' : '#D7CCC8'}`,
                  padding: '15px',
                  borderRadius: '6px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: form.payment === 'cash' ? '#EFEBE9' : '#faf9f8'
                }}
              >
                <div className="option-content" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <i className="fas fa-money-bill-wave" style={{fontSize: '24px', color: '#8D6E63'}}></i>
                  <div>
                    <strong style={{display: 'block', color: '#3E2723', marginBottom: '5px'}}>Cash on Delivery</strong>
                    <p style={{color: '#5D4037', fontSize: '14px', margin: '0'}}>Pay when books arrive at your doorstep</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`payment-option ${form.payment === 'card' ? 'selected' : ''}`}
                onClick={() => setForm({...form, payment: 'card'})}
                style={{
                  border: `2px solid ${form.payment === 'card' ? '#8D6E63' : '#D7CCC8'}`,
                  padding: '15px',
                  borderRadius: '6px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: form.payment === 'card' ? '#EFEBE9' : '#faf9f8'
                }}
              >
                <div className="option-content" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <i className="fas fa-credit-card" style={{fontSize: '24px', color: '#8D6E63'}}></i>
                  <div>
                    <strong style={{display: 'block', color: '#3E2723', marginBottom: '5px'}}>Credit/Debit Card</strong>
                    <p style={{color: '#5D4037', fontSize: '14px', margin: '0'}}>Pay online now securely</p>
                  </div>
                </div>
              </div>
            </div>

            {form.payment === 'card' && (
              <div className="card-fields" style={{
                marginTop: '20px',
                padding: '20px',
                background: '#EFEBE9',
                border: '1px solid #D7CCC8',
                borderRadius: '6px'
              }}>
                <div className="form-group" style={{marginBottom: '20px'}}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#3E2723'
                  }}>Card Number *</label>
                  <input 
                    type="text" 
                    name="cardNumber" 
                    value={form.cardNumber} 
                    onChange={handleChange} 
                    placeholder="1234 5678 9012 3456" 
                    required 
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #D7CCC8',
                      borderRadius: '6px',
                      fontSize: '15px',
                      background: '#faf9f8'
                    }}
                  />
                </div>
                <div className="card-row" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '15px',
                  marginTop: '15px'
                }}>
                  <div className="form-group">
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#3E2723'
                    }}>Expiry Date *</label>
                    <input 
                      type="text" 
                      name="cardExpiry" 
                      value={form.cardExpiry} 
                      onChange={handleChange} 
                      placeholder="MM/YY" 
                      required 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #D7CCC8',
                        borderRadius: '6px',
                        fontSize: '15px',
                        background: '#faf9f8'
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#3E2723'
                    }}>CVC *</label>
                    <input 
                      type="text" 
                      name="cardCvc" 
                      value={form.cardCvc} 
                      onChange={handleChange} 
                      placeholder="123" 
                      required 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #D7CCC8',
                        borderRadius: '6px',
                        fontSize: '15px',
                        background: '#faf9f8'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="form-buttons" style={{
              display: 'flex',
              gap: '15px',
              marginTop: '20px'
            }}>
              <button 
                type="button" 
                className="btn btn-outline" 
                onClick={() => setShowCheckout(false)}
                style={{
                  background: 'white',
                  color: '#3E2723',
                  border: '2px solid #3E2723',
                  padding: '12px 25px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  flex: '1'
                }}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={cartItems.length === 0}
                style={{
                  background: '#3E2723',
                  color: 'white',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  flex: '1',
                  opacity: cartItems.length === 0 ? 0.5 : 1
                }}
              >
                Place Order - Rs. {cartTotal.total}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;