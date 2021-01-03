import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext);

    return ( 
        <nav className="navbar navbar-light bg-light rounded mb-2">
            <h1 className="col-md-12 col-12">Ninja Reading List</h1>
            <p className="navbar-text col-md-12 col-12">Currently you have {books.length} books to get through.</p>
        </nav>
     );
}
 
export default Navbar;