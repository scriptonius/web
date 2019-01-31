const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    category:{
        ref: 'categories',
        type: Schema.Types.ObjectId
    },
    category:{
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports.model('positions', positionSchema)