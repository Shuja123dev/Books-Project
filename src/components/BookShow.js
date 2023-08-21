import React, { useState } from 'react'
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {

    const [editMode, setEditMode] = useState(false);

    const handleDelete = () => {
        onDelete(book.id);
    }

    let content = <h3>{book.title}</h3>

    const handleEditMode = () => {
        setEditMode(!editMode);
    }

    const showUpdatedTitle = (id, newTitle) => {
        setEditMode(false);
        onEdit(id, newTitle)
    }

    if (editMode) {
        content = <BookEdit book={book} onEdit={onEdit} showUpdate={showUpdatedTitle} />
    }

    return (
        <div className='book-show'>
            {content}
            <div className="actions">
                <button className='edit' onClick={handleEditMode}>Edit</button>
                <button className='delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow