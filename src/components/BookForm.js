import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK',
            book: {title, author}
        });
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form className="form-group row mx-auto my-3 bg-light rounded d-flex justify-content-between" onSubmit={handleSubmit}>
            <input type="text" className="form-control col-lg-4 col-md-4 col-12 mr-2" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" className="form-control col-lg-4 col-md-4 col-12 mr-2" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" className="btn btn-primary col-lg-3 col-md-3 col-12" value="Add Book" />
        </form>
     );
}
 
export default NewBookForm;