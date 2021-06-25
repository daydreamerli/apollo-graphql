const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
})

const Author = mongoose.model('author',AuthorSchema);

module.exports = Author;