const mongoose = require('mongoose')

const newCardschema = mongoose.Schema({
    name: String,
    objID: String,
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Cards', newCardschema)