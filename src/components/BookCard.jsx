import React from 'react';
import './BookCard.css';
// import BookCard from './BookCard';
import { Link } from 'react-router-dom';

const BookCard = ({ book, deleteBook }) => {
    const handleUpdateClick = () => {
        console.log(book.id);
    };

    const handleDelete = () => {
        if (window.confirm("are you sure?"))
            deleteBook(book.id);
    };

    return (
        <div key={book.id} className="book-card">
            <div className="book-cover">
                <img src={book.cover_image} alt={book.title} style={{ maxWidth: '150px', maxHeight: '200px' }} />
            </div>
            <div className="book-details">
                <div>Id: {book.id}</div>
                <div>Title: {book.title}</div>
                <div>Author: {book.author}</div>
                <div>Year: {book.publication_year}</div>
                <div>Genres: {book.genre.join(', ')}</div>
                <div>Description: {book.description}</div>
                <div>
                    <button style={{ backgroundColor: 'red', color: 'white', position: 'relative', bottom: '0px' }} onClick={() => handleDelete()}>Delete</button>
                    <Link to={`/update/${book.id}`}>
                        <button style={{ backgroundColor: 'green', color: 'white', position: 'relative', bottom: '0px' }} onClick={() => handleUpdateClick()}>Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
