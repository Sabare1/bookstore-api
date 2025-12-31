const book = require('../models/book');

const getAllBooks = async(req, res) => {
    try{
        const books = await book.find({});
        res.send(books);
    }catch(err){
        
    }
}
const getBookById = async(req, res) => {
    
}
const addBook = async(req, res) => {
    try{
        const newBook = await book.create(req.body);
        res.status(201).json({
            msg: "Book added successfully",
            data: newBook
        })
    }catch(err){
        res.status().json({

        })
    }
}
const updateBook = async(req, res) => {
    
}
const deleteBook = async(req, res) => {
    
}

module.exports = {
    getAllBooks, getBookById, addBook, updateBook, deleteBook
}