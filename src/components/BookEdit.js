import React, { useState } from 'react'

const BookEdit = ({ book, showUpdate }) => {

    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        showUpdate(book.id, title);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='book-edit'>
                <h3>Title</h3>
                <input className='input' value={title} onChange={handleChange} type="text" name="" id="" />
                <button className='button is-primary'>Save</button>
            </form>
        </div>
    )
}

export default BookEdit