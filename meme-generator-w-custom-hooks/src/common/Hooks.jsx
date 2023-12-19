import { useState } from "react"
import { getMemes } from "./Queries"
import { v4 as uuidv4 } from 'uuid';



export const useMemes = () => {
    const [memes, setMemes] = useState([])

    const setMemeData = async () => {
        const memeData = await getMemes()
        setMemes(memeData)
    }

    return {
        memes,
        setMemeData
    }
}

export const useMemeList = () => {
    const [memeList, setMemeList] =  useState([])

    const saveMeme = (newMeme) => {
        setMemeList(prevMemeList => [...prevMemeList, {...newMeme, _id: uuidv4()}])
    }

    const updateMeme = (editField, memeId) => {
        setMemeList(prevMemeList => prevMemeList.map((meme) => memeId !== meme._id ? meme : editField))
    }

    const deleteMeme = (memeId) => {
        setMemeList(prevMemeList => prevMemeList.filter((meme) => meme._id !== memeId))
    }

    return {
        memeList,
        saveMeme,
        updateMeme,
        deleteMeme
    }
}


export const useEditFields = (obj) => {
    const [editField, setEditField] = useState({
        topText: obj.topText,
        bottomText: obj.bottomText,
        imgUrl: obj.imgUrl
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setEditField(prevEditField => {
            return {
                ...prevEditField,
                [name]: value
            }
        })
    }

    return {
        editField,
        handleChange
    }
}

export const useToggleEdit = () => {
    const [toggleEdit, setToggleEdit] = useState(false)

    const handleToggleEdit = () => {
        setToggleEdit(prev => !prev)
    }

    return {
        toggleEdit, 
        handleToggleEdit
    }
}