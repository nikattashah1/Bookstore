function Books({ addToCart, selectedCategory, searchTerm = '' }) {
    const allBooks = [
        // YOUR EXISTING 24 BOOKS HERE (keep as is)
        {
            id: 1,
            title: "The Power of Subconscious Mind",
            author: "Joseph Murphy",
            description: "Learn to use your mind's power",
            price: "Rs. 1,499",
            category: "Self-Help",
            image: "https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg"
        },

        {
            id: 2,
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            description: "Money lessons from two dads",
            price: "Rs. 1,499",
            category: "Finance",
            image: "https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg"
        },
        {
            id: 3,
            title: "Atomic Habits",
            author: "James Clear",
            description: "Small changes, big results",
            price: "Rs. 1,399",
            category: "Self-Help",
            image: "https://m.media-amazon.com/images/I/81bGKUa1e0L.jpg"
        },
        {
            id: 4,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            description: "Timeless money lessons",
            price: "Rs. 1,599",
            category: "Finance",
            image: "https://media.thuprai.com/front_covers/psychology-of-money.jpg"
        },
        {
            id: 5,
            title: "The Alchemist",
            author: "Paulo Coelho",
            description: "A magical journey",
            price: "Rs. 999",
            category: "Fiction",
            image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
        },
        {
            id: 6,
            title: "7 Habits of Highly Effective People",
            author: "Stephen Covey",
            description: "Personal development guide",
            price: "Rs. 1,699",
            category: "Self-Help",
            image: "https://media.thuprai.com/products/The_7_Habits_Of_Highly_Effective_People.jpg"
        },
        {
            id: 7,
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            description: "Classic success book",
            price: "Rs. 899",
            category: "Success",
            image: "https://m.media-amazon.com/images/I/61IxJuRI39L.jpg"
        },
        {
            id: 8,
            title: "The Intelligent Investor",
            author: "Benjamin Graham",
            description: "Investment strategies",
            price: "Rs. 2,099",
            category: "Finance",
            image: "https://m.media-amazon.com/images/I/91+t0Di07FL.jpg"
        },
        {
            id: 9,
            title: "Cashflow Quadrant",
            author: "Robert Kiyosaki",
            description: "Financial freedom path",
            price: "Rs. 1,650",
            category: "Business",
            image: "https://m.media-amazon.com/images/I/71+SWQ6xj1L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 10,
            title: "Millionaire Fastlane",
            author: "MJ DeMarco",
            description: "Build wealth fast",
            price: "Rs. 1,799",
            category: "Business",
            image: "https://books.bizmandala.com/media/books/9789390085491/image_zgn7H9l.jpeg"
        },
        {
            id: 11,
            title: "How to Win Friends and Influence People",
            author: "Dale Carnegie",
            description: "Social skills classic",
            price: "Rs. 1,099",
            category: "Psychology",
            image: "https://media.thuprai.com/__sized__/front_covers/how-to-win-friends-influence-people-dale-carnegie-books-8gqh0a88-thumbnail-280x405-70.jpg"
        },
        {
            id: 12,
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            description: "A counterintuitive approach to living a good life",
            price: "Rs. 1,399",
            category: "Psychology",
            image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"
        },
        {
            id: 13,
            title: "Can't Hurt Me",
            author: "David Goggins",
            description: "Master your mind and defy the odds",
            price: "Rs. 1,899",
            category: "Motivation",
            image: "https://m.media-amazon.com/images/I/81YJFNc54lL.jpg"
        },
        {
            id: 14,
            title: "The 5 AM Club",
            author: "Robin Sharma",
            description: "Own your morning, elevate your life",
            price: "Rs. 1,499",
            category: "Motivation",
            image: "https://books.bizmandala.com/media/books/9789387944893/image.jpeg"
        },
        {
            id: 15,
            title: "Steve Jobs",
            author: "Walter Isaacson",
            description: "The exclusive biography",
            price: "Rs. 2,199",
            category: "Biography",
            image: "https://m.media-amazon.com/images/I/81VStYnDGrL.jpg"
        },
        {
            id: 16,
            title: "Becoming",
            author: "Michelle Obama",
            description: "Former First Lady's memoir",
            price: "Rs. 1,999",
            category: "Biography",
            image: "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg"
        },
        {
            id: 17,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "American classic novel",
            price: "Rs. 999",
            category: "Classics",
            image: "https://m.media-amazon.com/images/I/71FxgtFKcQL.jpg"
        },
        {
            id: 18,
            title: "1984",
            author: "George Orwell",
            description: "Dystopian social science fiction",
            price: "Rs. 899",
            category: "Classics",
            image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
        },
        {
            id: 19,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "American classic",
            price: "Rs. 799",
            category: "Classics",
            image: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg"
        },
        {
            id: 20,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            description: "Romantic novel of manners",
            price: "Rs. 699",
            category: "Classics",
            image: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg"
        },
        {
            id: 21,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            description: "Fantasy adventure",
            price: "Rs. 1,299",
            category: "Fiction",
            image: "https://m.media-amazon.com/images/I/710+HcoP38L.jpg"
        },
        {
            id: 22,
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            description: "First book in the series",
            price: "Rs. 1,599",
            category: "Fiction",
            image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
        },
        {
            id: 23,
            title: "The Lean Startup",
            author: "Eric Ries",
            description: "How constant innovation creates radically successful businesses",
            price: "Rs. 1,699",
            category: "Business",
            image: "https://m.media-amazon.com/images/I/81vvgZqCskL.jpg"
        },
        {
            id: 24,
            title: "Zero to One",
            author: "Peter Thiel",
            description: "Notes on startups, or how to build the future",
            price: "Rs. 1,799",
            category: "Business",
            image: "https://media.thuprai.com/products/Zero_to_One.jpg"
        },
        {
            id: 25,
            title: "The Very Hungry Caterpillar",
            author: "Eric Carle",
            description: "Classic children's picture book",
            price: "Rs. 599",
            category: "Kids",
            image: "https://m.media-amazon.com/images/I/81qsstEtrgL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 26,
            title: "Goodnight Moon",
            author: "Margaret Wise Brown",
            description: "Beloved bedtime story",
            price: "Rs. 499",
            category: "Kids",
            image: "https://m.media-amazon.com/images/I/91WuHblNkEL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 27,
            title: "Where the Wild Things Are",
            author: "Maurice Sendak",
            description: "Imaginative children's story",
            price: "Rs. 649",
            category: "Kids",
            image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Where_The_Wild_Things_Are_%28book%29_cover.jpg"
        },
        {
            id: 28,
            title: "The Cat in the Hat",
            author: "Dr. Seuss",
            description: "Classic rhyming book",
            price: "Rs. 549",
            category: "Kids",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/The_Cat_in_the_Hat.png/250px-The_Cat_in_the_Hat.png"
        },
        {
            id: 29,
            title: "Brown Bear, Brown Bear",
            author: "Bill Martin Jr.",
            description: "Colorful animal book for kids",
            price: "Rs. 499",
            category: "Kids",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLLYD52W87i2aGZzLUo-1H-D9e9V5I1yqww&s"
        },
        {
            id: 30,
            title: "Charlotte's Web",
            author: "E.B. White",
            description: "Heartwarming animal friendship",
            price: "Rs. 799",
            category: "Kids",
            image: "https://m.media-amazon.com/images/M/MV5BMTQ5MTUzMTAzMl5BMl5BanBnXkFtZTcwNTE0NTcyMw@@._V1_.jpg"
        },

        {
            id: 31,
            title: "The Four Agreements",
            author: "Don Miguel Ruiz",
            description: "Practical guide to personal freedom",
            price: "Rs. 1,099",
            category: "Self-Help",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMfTMitGC5l3LVj604DUwKV844HDaiCRZgQ&s"
        },
        {
            id: 32,
            title: "The Monk Who Sold His Ferrari",
            author: "Robin Sharma",
            description: "Spiritual wisdom for modern life",
            price: "Rs. 999",
            category: "Self-Help",
            image: "https://media.thuprai.com/front_covers/The_Monk_Who_Sold_His_Ferrari1.png"
        },
        {
            id: 33,
            title: "The Richest Man in Babylon",
            author: "George S. Clason",
            description: "Timeless financial wisdom",
            price: "Rs. 799",
            category: "Finance",
            image: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789388423397%2F9789388423397-1659.webp&w=3840&q=75"
        },
        {
            id: 34,
            title: "The Little Book of Common Sense Investing",
            author: "John C. Bogle",
            description: "Investment guide for everyone",
            price: "Rs. 1,299",
            category: "Finance",
            image: "https://m.media-amazon.com/images/I/81vPxCvGMcL.jpg"
        },
        {
            id: 35,
            title: "The Da Vinci Code",
            author: "Dan Brown",
            description: "Mystery thriller novel",
            price: "Rs. 1,199",
            category: "Fiction",
            image: "https://m.media-amazon.com/images/I/91FWKxNXR9L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 36,
            title: "The Girl on the Train",
            author: "Paula Hawkins",
            description: "Psychological thriller",
            price: "Rs. 1,099",
            category: "Fiction",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhSmVVfW3gKGTXjv3XHgk-JjTfCrHQoyRLA&s"
        },
        {
            id: 37,
            title: "The Power of Now",
            author: "Eckhart Tolle",
            description: "Spiritual enlightenment guide",
            price: "Rs. 1,399",
            category: "Psychology",
            image: "https://grey.com.np/cdn/shop/products/417VRErnKPL._AC_SY780.jpg?v=1669897082"
        },
        {
            id: 38,
            title: "Man's Search for Meaning",
            author: "Viktor E. Frankl",
            description: "Holocaust survivor's psychology",
            price: "Rs. 999",
            category: "Psychology",
            image: "https://media.thuprai.com/front_covers/mans-search-for-meaning.jpg"
        },
        {
            id: 39,
            title: "The 48 Laws of Power",
            author: "Robert Greene",
            description: "Power dynamics strategies",
            price: "Rs. 1,899",
            category: "Success",
            image: "https://media.thuprai.com/front_covers/the-48-laws-of-power-a-joost-elffers-production-exovzb5n.jpg"
        },
        {
            id: 40,
            title: "Deep Work",
            author: "Cal Newport",
            description: "Rules for focused success",
            price: "Rs. 1,299",
            category: "Success",
            image: "https://media.thuprai.com/front_covers/deep-work-i1i3zyhj.jpg"
        },
        {
            id: 41,
            title: "Elon Musk: Tesla, SpaceX",
            author: "Ashlee Vance",
            description: "Biography of Elon Musk",
            price: "Rs. 1,699",
            category: "Biography",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuB-HTzX2ixirQ32Z0JyP28PHBUckV01DaA&s"
        },
        {
            id: 42,
            title: "Shoe Dog",
            author: "Phil Knight",
            description: "Nike founder's memoir",
            price: "Rs. 1,599",
            category: "Biography",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWNP_VsPy5FIvoE0Hjfm-EXb3ZKSJCt4gmw&s"
        },
        {
            id: 43,
            title: "Moby Dick",
            author: "Herman Melville",
            description: "Classic American novel",
            price: "Rs. 899",
            category: "Classics",
            image: "https://m.media-amazon.com/images/I/91xNmlf86yL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 44,
            title: "Wuthering Heights",
            author: "Emily Brontë",
            description: "Classic romantic novel",
            price: "Rs. 799",
            category: "Classics",
            image: "https://media.thuprai.com/front_covers/wuthering-heights-chartwell-classics-cbv3dbh8.jpg"
        },
        {
            id: 45,
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            description: "Classic Russian literature",
            price: "Rs. 999",
            category: "Classics",
            image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png"
        },
        {
            id: 46,
            title: "The Lincoln Highway",
            author: "Amor Towles",
            description: "Road trip adventure across 1950s America",
            price: "Rs. 1,599",
            category: "Fiction",
            image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1633443634i/57109107.jpg"
        },
        {
            id: 47,
            title: "Lessons in Chemistry",
            author: "Bonnie Garmus",
            description: "A scientist becomes a cooking show star",
            price: "Rs. 1,399",
            category: "Fiction",
            image: "https://m.media-amazon.com/images/I/816WbR7nBdL._UF1000,1000_QL80_.jpg"
        },
        {
            id: 48,
            title: "Tomorrow, and Tomorrow, and Tomorrow",
            author: "Gabrielle Zevin",
            description: "Story of friendship and video games",
            price: "Rs. 1,499",
            category: "Fiction",
            image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg"
        },
        {
            id: 49,
            title: "I'm Glad My Mom Died",
            author: "Jennette McCurdy",
            description: "Memoir of childhood stardom",
            price: "Rs. 1,699",
            category: "Biography",
            image: "https://m.media-amazon.com/images/I/71Z2AwOxq+L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 50,
            title: "Dopamine Nation",
            author: "Anna Lembke",
            description: "Finding balance in pleasure and pain",
            price: "Rs. 1,499",
            category: "Psychology",
            image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629679336i/55723020.jpg"
        }
    ];


    const filteredBooks = allBooks.filter(book => {
        const categoryMatch = selectedCategory === 'All' || book.category === selectedCategory;
        const searchMatch = !searchTerm.trim() ||
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.category.toLowerCase().includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;
    });

    return (
        <section className="books" id="books">
            <div className="container">
                <h2>
                    {searchTerm.trim() ? (
                        `Search: "${searchTerm}"`
                    ) : selectedCategory === 'All' ? (
                        'All Books'
                    ) : (
                        `${selectedCategory} Books`
                    )} ({filteredBooks.length})
                </h2>

                {filteredBooks.length === 0 && (
                    <div className="no-results">
                        <i className="fas fa-search" style={{ fontSize: '50px', color: '#8D6E63', marginBottom: '15px' }}></i>
                        <h3 style={{ color: '#3E2723', marginBottom: '10px' }}>No books found</h3>
                        <p style={{ color: '#5D4037', marginBottom: '5px' }}>
                            {searchTerm.trim() ? `No books match "${searchTerm}"` : `No books in "${selectedCategory}" category`}
                        </p>
                        <p style={{ color: '#666', fontSize: '14px' }}>Try a different search or category</p>
                    </div>
                )}

                <div className="book-grid">
                    {filteredBooks.map((book) => (
                        <div className="book-card" key={book.id}>
                            <div
                                className="book-image"
                                style={{ backgroundImage: `url(${book.image})` }}
                            >
                                <div className="book-category">{book.category}</div>
                            </div>
                            <div className="book-info">
                                <h3>{book.title}</h3>
                                <p className="book-author">By {book.author}</p>
                                <p className="book-desc">{book.description}</p>
                                <div className="book-footer">
                                    <span className="book-price">{book.price}</span>
                                    <button
                                        className="add-cart"
                                        onClick={() => addToCart(book)}
                                    >
                                        <i className="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Books;