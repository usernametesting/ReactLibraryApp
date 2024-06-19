import { useContext, useEffect, useState } from 'react';
import './App.css'
import { BookContext } from './contexts/bookContext';
import BookCard from './components/BookCard';
import { Link } from 'react-router-dom';

function App() {

  const { books, deleteBook } = useContext(BookContext);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filtered);
  };


  return (
    <>
      <div className='main-div'>
        <div className="header">
          <h1>Book Library</h1>
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleSearchChange}
          />
          <Link to="/add">
            <button>Add New Book</button>
          </Link>
        </div>
        <div className="books-container">

          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} deleteBook={deleteBook} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
