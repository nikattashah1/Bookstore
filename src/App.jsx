import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Books from './components/Books';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (book) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) {
        return prev.map(item => 
          item.id === book.id ? {...item, quantity: item.quantity + 1} : item
        );
      }
      return [...prev, {...book, quantity: 1}];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === id ? {...item, quantity: qty} : item
    ));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('Rs. ', '').replace(',', ''));
      return sum + (price * item.quantity);
    }, 0);
    
    const shipping = subtotal >= 2000 ? 0 : 150;
    const total = subtotal + shipping;
    
    return {
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      total: total.toFixed(2)
    };
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <Header 
        cartCount={cartCount}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        calculateTotal={calculateTotal}
        setShowCheckout={setShowCheckout}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}  // ✅ CORRECT PROP NAME
      />
      <Hero />
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Books 
        selectedCategory={selectedCategory} 
        addToCart={addToCart} 
        searchTerm={searchTerm}
      />
      <About />
      <Contact />
      <Footer />
      
      {showCheckout && (
        <Checkout 
          cartItems={cartItems}
          cartTotal={calculateTotal()}
          clearCart={() => setCartItems([])}
          setShowCheckout={setShowCheckout}
        />
      )}
    </div>
  );
}

export default App;