import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: "The Silent Sea",
      author: "Clive Cussler",
      category: "Adventure",
      published_date: "2010-03-01",
      isbn: "9780425233293",
      pages: 400,
      language: "English",
      available: true,
      rating: 4.1,
      image: "https://m.media-amazon.com/images/I/81cjbjANGRL._SL1500_.jpg"
    },
    {
      id: 2,
      title: "The Midnight Library",
      author: "Matt Haig",
      category: "Fiction",
      published_date: "2020-09-29",
      isbn: "9780525559474",
      pages: 304,
      language: "English",
      available: false,
      rating: 4.3,
      image: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg"
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-help",
      published_date: "2018-10-16",
      isbn: "9780735211292",
      pages: 320,
      language: "English",
      available: true,
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-fiction",
      published_date: "2014-02-04",
      isbn: "9780062316097",
      pages: 464,
      language: "English",
      available: true,
      rating: 4.6,
      image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg"
    },
    {
      id: 5,
      title: "Educated",
      author: "Tara Westover",
      category: "Biography",
      published_date: "2018-02-20",
      isbn: "9780399590504",
      pages: 352,
      language: "English",
      available: false,
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg"
    },
    {
      id: 6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Philosophy",
      published_date: "1993-05-01",
      isbn: "9780061122415",
      pages: 208,
      language: "English",
      available: true,
      rating: 4.2,
      image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
    },
    {
      id: 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
      published_date: "1925-04-10",
      isbn: "9780743273565",
      pages: 180,
      language: "English",
      available: true,
      rating: 4.0,
      image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
    },
    {
      id: 8,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Classic",
      published_date: "1960-07-11",
      isbn: "9780061120084",
      pages: 281,
      language: "English",
      available: true,
      rating: 4.5,
      image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
    },
    {
      id: 9,
      title: "1984",
      author: "George Orwell",
      category: "Dystopian",
      published_date: "1949-06-08",
      isbn: "9780451524935",
      pages: 328,
      language: "English",
      available: false,
      rating: 4.4,
      image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
    },
    {
      id: 10,
      title: "The Book Thief",
      author: "Markus Zusak",
      category: "Historical Fiction",
      published_date: "2005-03-14",
      isbn: "9780375842207",
      pages: 552,
      language: "English",
      available: true,
      rating: 4.6,
      image: "https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg"
    }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
