const mongoose = require('mongoose')
const Schema = mongoose.Schema

const heroClassSchema = new Schema({
    heroClass: {
        type: String,
        required: true
    },
    startingWeapon: {
        type: Schema.Types.ObjectId,
        ref: "Weapon",
        required: true
    },
    img: {
        type: String,
        required: true
    },
    classDescription: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('HeroClass', heroClassSchema)