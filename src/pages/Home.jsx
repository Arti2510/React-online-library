import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const books = useSelector((state) => state.books.books);

  // Get unique categories
  const categories = [...new Set(books.map(book => book.category))];

  // Select top 3 rated books
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="home">
      <h1>Welcome to My Online Library 📖</h1>

      <section className="categories">
        <h2>Book Categories</h2>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>
              <Link to={`/books/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="popular-books">
        <h2>Popular Books</h2>
        <div className="book-list">
          {popularBooks.map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`} style={{color:'red'}}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
