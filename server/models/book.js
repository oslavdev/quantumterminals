const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        default:'n/a'
    },
    id:{
        type:String,
        default:'n/a'
    },
    message:{
        type:String,
        default:'n/a'
    }
})

const Book = mongoose.model('Book',bookSchema )

module.exports = { Book }
