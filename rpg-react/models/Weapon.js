const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weaponSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weaponType: {
        type: String,
        required: true
    },
    attackPower: {
        type: Number,
        default: 0
    },
    defense: {
        type: Number,
        default: 0
    },
    img: {
        type: String,
    },

})

module.exports = mongoose.model('Weapon', weaponSchema)