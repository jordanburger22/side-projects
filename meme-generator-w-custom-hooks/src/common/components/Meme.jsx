import React, { useState } from 'react';
import { useEditFields, useMemeList } from '../Hooks';
import { useMemeContext } from '../context/MemeContext';
import { useToggleEdit } from '../Hooks';



function Meme({ topText, bottomText, imgUrl, memeId }) {

    const { editField, handleChange } = useEditFields({ topText, bottomText, imgUrl })

    const {toggleEdit, handleToggleEdit} = useToggleEdit()

    const { memeListAPI: { updateMeme, deleteMeme } } = useMemeContext()
    // was importing straight from hook instead of the version of hook that is in context

    const handleSubmit = (e) => {
        e.preventDefault()
        updateMeme(editField, memeId)
        handleToggleEdit()
    }

    const handleDelete = () => {
        deleteMeme(memeId)
    }

    return (
        <>
            <div>
                <h2>{topText}</h2>
                <h2>{bottomText}</h2>
                <img src={imgUrl} />
                <button onClick={handleToggleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            { toggleEdit &&
                <form onSubmit={handleSubmit}>
                <input
                    name='topText'
                    value={editField.topText}
                    onChange={handleChange}
                />
                <input
                    name='bottomText'
                    value={editField.bottomText}
                    onChange={handleChange}
                />
                <button>Submit</button>
                <button>Cancel</button>
            </form>}
        </>
    );
}

export default Meme;