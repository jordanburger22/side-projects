import React, { useState, useEffect } from 'react';
import { useMemes } from '../Hooks';
import { MemeContext, useMemeContext } from '../context/MemeContext';




function NewMemeForm() {

    const { memeAPI: { memes, setMemeData }, memeListAPI: { saveMeme } } = useMemeContext()

    const [input, setInput] = useState({
        topText: '',
        bottomText: '',
        imgUrl: 'https://i.imgflip.com/30b1gx.jpg'
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setInput(prevInput => {
            return { ...prevInput, [name]: value }
        })
    }

    useEffect(() => {
        setMemeData()
    }, [])

    const getNewImg = (e) => {
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * memes.length)
        setInput(prevInput => {
            return {
                ...prevInput,
                imgUrl: memes[randomNumber].url
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveMeme(input)
    }


    return (
        <div className='form--container'>
            <form className='newMemeForm' onSubmit={handleSubmit}>

                <>
                    <input
                        name='topText'
                        value={input.topText}
                        placeholder='Top Text'
                        onChange={handleChange}
                    />

                    <input
                        name='bottomText'
                        value={input.bottomText}
                        placeholder='Bottom Text'
                        onChange={handleChange}
                    />
                </>

                <>
                    <button onClick={getNewImg}>Get new meme Image</button>
                </>

                <button type='submit'>Submit</button>

            </form>
            <div className='meme-container'>
                <h2>{input.topText}</h2>
                <img style={{ width: '200px' }} src={input.imgUrl} />
                <h2>{input.bottomText}</h2>

            </div>
        </div>
    );
}

export default NewMemeForm;