const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enemySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    attackPoints: {
        type: Number,
        required: true
    },
    inventory: [{
        type: Schema.Types.ObjectId,
        ref: "InventoryItem"
    }],
    img: {
        type: String,
    }


})

module.exports = mongoose.model('Enemy', enemySchema)