import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {

  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const createBookArray = [...books, { id: Math.round(Math.random() * 9999), title: title }];
    setBooks(createBookArray);
  }

  const handleEdit = (id, title) => {
    const updateTitle = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title }
      }
      return book;
    })
    setBooks(updateTitle)
  }

  const handleDelete = (id) => {
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(deleteBook);
  }

  return (
    <>
      <BookList bookData={books} onDelete={handleDelete} onEdit={handleEdit} />
      <BookCreate createBook={handleCreateBook} />
    </>
  );
}

export default App;