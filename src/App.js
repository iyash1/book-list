import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/NavBar';
import BookContextProvider from './contexts/BookContext';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="container">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
