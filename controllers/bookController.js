const {Book} = require('../models');
const genres = ['Science Fiction', 'Fiction', 'Fantasy', 'Horror'].sort();

//view all
module.exports.viewAll = async function(req, res){
    const books = await Book.findAll();
    res.render('books/view_all', {books});
};
//profile
module.exports.viewProfile = async function(req, res){
    const book = await Book.findByPk(req.params.id);
    res.render('books/profile', {book})
};
//render add form

//add

//render edit form
module.exports.renderEditForm = async function(req, res){
    const book = await Book.findByPk(req.params.id);
    res.render('books/edit', {book, genres});
};
//update

//delete