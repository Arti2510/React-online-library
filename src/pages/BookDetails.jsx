import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Published Date:</strong> {book.published_date}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Language:</strong> {book.language}</p>
      <p><strong>Available:</strong> {book.available ? "Yes" : "No"}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <button onClick={() => navigate('/books')}>⬅ Back to Browse</button>
    </div>
  );
};

export default BookDetails;
