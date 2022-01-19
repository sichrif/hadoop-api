const mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    year: {
        type: String,
     },
     nbooks: {
        type: String,
 
    } 
});

let Book = module.exports = mongoose.model('Book', bookSchema);