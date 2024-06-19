import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/bookContext';
import './Boook.css';
import { Link } from 'react-router-dom';

const Boook = () => {
    const { addBook, books } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [genre, setGenre] = useState([]);
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const lastId = Math.max(...books.map(book => book.id));
    const handleSubmit = (e) => {

        e.preventDefault();
        const newBook = {
            id: lastId + 1,
            title,
            author,
            publication_year: publicationYear,
            genre,
            description,
            cover_image: coverImage
        };
        addBook(newBook);
        setTitle('');
        setAuthor('');
        setPublicationYear('');
        setGenre([]);
        setDescription('');
        setCoverImage('');
        setIsSubmitted(true);

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
        <div className="add-book-container">
            <h1>Add a New Book</h1>
            <form className="add-book-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Book Title:</label>
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
                <button type="submit">add</button>
                <Link style={{marginTop:'10px'}} to="/">
                    <button type="button">Back to main page</button>
                </Link>
            </form>
        </div>
    );
};

export default Boook;
