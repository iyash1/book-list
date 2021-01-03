import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length ? ( 
        <div>
            <ol className="list-group">
                {books.map(book => {
                    return (
                        <BookDetails book={book} key={book.id} />
                    )
                })}
            </ol>
        </div>
     ) : (
        <div className="card">
            <div className="card-body">
                <p className="card-title text-center h4">No books to read. Hello free time :) </p>
            </div>
        </div>
     );
}
 
export default BookList;