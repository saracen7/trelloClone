const mongoose = require('mongoose')

const newListschema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('lists', newListschema)