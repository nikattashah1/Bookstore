function Categories({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Self-Help', 'Finance', 'Fiction', 'Business', 'Success', 'Biography', 'Psychology', 'Motivation', 'Classics', 'Kids'];

  return (
    <section className="categories">
      <div className="container">
        <h2>Browse Collection</h2>
        <div className="category-list">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;