const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'book title is required'],
        maxLength: [100, 'title cannot be more than 100 characters'],
        trim: true
    },
    author:{
        type: String,
        required: [true, 'Author name is required'],
        trim: true
    },
    year:{
        type: Number,
        required: [true, 'Publication year must be specified'],
        min:[1000, 'Year cannot be lesser than 1000'],
        max:[new Date().getFullYear(), 'Year cannot be greater than ']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Book', BookSchema);