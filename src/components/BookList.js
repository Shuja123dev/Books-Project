import React from 'react'
import BookShow from './BookShow'

const BookList = ({ bookData, onDelete, onEdit }) => {
    const renderedBooks = bookData.map((book, index) => {
        return <BookShow book={book} key={index} onDelete={onDelete} onEdit={onEdit} />
    })
    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    )
}

export default BookList