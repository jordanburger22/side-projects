const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventoryItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    buffType: {
        type: String,
        required: true
    },
    buffAmount: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('InventoryItem', inventoryItemSchema)