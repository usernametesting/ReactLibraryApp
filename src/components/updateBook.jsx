import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookContext } from '../contexts/bookContext';
import './updateBook.css';

const UpdateBook = () => {
    const { bookId } = useParams();
    const { books, updateBook } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [genre, setGenre] = useState([]);
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');

    useEffect(() => {
        const bookToUpdate = books.find(book => book.id === parseInt(bookId));
        if (bookToUpdate) {
            setTitle(bookToUpdate.title);
            setAuthor(bookToUpdate.author);
            setPublicationYear(bookToUpdate.publication_year);
            setGenre(bookToUpdate.genre);
            setDescription(bookToUpdate.description);
            setCoverImage(bookToUpdate.cover_image);
        }
    }, [bookId, books]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = {
            id: parseInt(bookId),
            title,
            author,
            publication_year: publicationYear,
            genre,
            description,
            cover_image: coverImage
        };
        updateBook(updatedBook);
    };

    const handleGenreChange = (e) => {
        const options = e.target.options;
        const selectedGenres = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedGenres.push(options[i].value);
            }
        }
        setGenre(selectedGenres);
    };

    return (
        <div className="update-book-container">
            <h1>Update Book</h1>
            <form className="update-book-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="author">Writer:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="publicationYear">Year:</label>
                    <input
                        type="number"
                        id="publicationYear"
                        value={publicationYear}
                        onChange={(e) => setPublicationYear(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="genre">Janr:</label>
                    <select
                        multiple
                        id="genre"
                        value={genre}
                        onChange={handleGenreChange}
                        required
                    >
                        <option value="Children's Literature">Children's Literature</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Non-fiction">Non-fiction</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="coverImage">cover image URL:</label>
                    <input
                        type="text"
                        id="coverImage"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button type="submit">Update</button>
                    <Link to="/" style={{ marginTop: '10px' }}>
                        <button type="button">Back to main page</button>
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default UpdateBook;
