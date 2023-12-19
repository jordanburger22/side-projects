import React, { useState } from 'react';
import { MemeContext, useMemeContext } from '../context/MemeContext';
import Meme from './Meme';


function MemeList() {

    const {memeListAPI: {memeList}} = useMemeContext()

    const memeElements = memeList.map((meme) => {
        return (
            <Meme 
            key = {meme._id}
            {...meme}
            memeId = {meme._id}
            />
        )
    })

    return (
        <div className='list--container'>
           <h1>Saved Memes:</h1> 
           <div className='meme--list'>
            {memeElements}
           </div>
        </div>
    );
}

export default MemeList;