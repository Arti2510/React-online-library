import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    published_date: '',
    isbn: '',
    pages: '',
    language: '',
    available: false,
    rating: '',
    image: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validate = () => {
    const errs = {};
    for (let key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        errs[key] = 'This field is required';
      }
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    dispatch(addBook({
      ...formData,
      id: Date.now(),
      pages: parseInt(formData.pages),
      rating: parseFloat(formData.rating),
    }));

    navigate('/books');
  };

  return (
    <div className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([field, value]) => (
          field !== 'available' ? (
            <div key={field}>
              <label>{field.replace('_', ' ').toUpperCase()}</label>
              {field === 'rating' ? (
                <input
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={value}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field === 'published_date' ? 'date' : field === 'pages' ? 'number' : 'text'}
                  name={field}
                  value={value}
                  onChange={handleChange}
                />
            )}
              {errors[field] && <span className="error">{errors[field]}</span>}
            </div>
          ) : (
            <div key={field}>
              <label>
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                />{' '}
                Available
              </label>
              {errors[field] && <span className="error">{errors[field]}</span>}
            </div>
          )
        ))}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
