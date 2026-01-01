const Book = require('../models/book');


const getAllBooks = async(req, res) => {
    try{
        const books = await Book.find({});
        res.send(books);
    }catch(err){
        res.status(500).json({msg:"Something went wrong"});
    }
}


const getBookById = async(req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(book){
            res.status(200).json({success:"true", data:book});
        }else{
            res.status(404).json({msg:"cannot find the book you're looking for!"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({success:"false", msg:"Something went wrong"});
    }
}


const addBook = async(req, res) => {
    try{
        const newBook = await Book.create(req.body);
        if(newBook){
            res.status(201).json({
                msg: "Book added successfully",
                data: newBook
            })
        }
        else{
            res.status(500).json({msg:"Something went wrong"})
        }
    }catch(err){
        res.status(500).json({msg:"Something went wrong"})
    }
}


const updateBook = async(req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(updatedBook){
            res.json({success:true, msg:"Successfully updated the book", data:updatedBook});
        }else{
            res.status(404).json({success: false, msg:"Cannot find the book you're looking for"});
        }
    } catch (error) {
        res.status(500).json({success: false, msg:"Something went wrong!"});
    }
}
const deleteBook = async(req, res) => {
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if(deletedBook){
            res.json({success: true, data:deletedBook});
        }
        else{
            res.status(404).json({success: false, msg:"Cannot find the book you're looking for!"})
        }
    }catch(err){
        res.status(500).json({success: false, msg:"Something went wrong please try again later"});
    }
}

module.exports = {
    getAllBooks, getBookById, addBook, updateBook, deleteBook
}