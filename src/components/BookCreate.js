import React, { useState } from 'react'

const BookCreate = ({ createBook }) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title !== '') {
            createBook(title);
        }
        setTitle('');
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form action="" onSubmit={handleSubmit}>
                <input className='input' value={title} onChange={handleChange} type="text" />
                <button className='button'>Submit</button>
            </form>
        </div>
    )
}

export default BookCreate