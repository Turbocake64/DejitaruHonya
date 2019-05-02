// requiring the models from our models folder (specifically the models defined in the /models/index.js)
const db = require("../models");

// Exporting out CRUD operations for the mongoose database Book collection
module.exports = {
  //findAll is a Read operation
  findAll: function(req, res) {
    // find all books in db.Books
    db.Book.find(req.query)
      // then bring up the books as a json object
      .then(dbBook => res.json(dbBook))
      //if error, catch it and give a 422 response as well as logging the error in the console
      .catch(err => res.status(422).json(err));
  },
  // findById is a Read operation for 1 book
  findById: function(req, res) {
    // finds 1 book based on the id passed in
    db.Book.findById(req.params.id)
      // then bring up the books as a json object
      .then(dbBook => res.json(dbBook))
      //if error, catch it and give a 422 response as well as logging the error in the console
      .catch(err => res.status(422).json(err));
  },
  // create is a Create operation
  create: function(req, res) {
    // we add another book to the db.Book collection
    db.Book.create(req.body)
      // passing in the new book as a json object
      .then(dbBook => res.json(dbBook))
      //if error, catch it and give a 422 response as well as logging the error in the console
      .catch(err => res.status(422).json(err));
  },
  // update is an Update operation
  update: function(req, res) {
    // here we are finding and updating a document by id
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      // passing in the updated json object into the db.Book collection 
      .then(dbBook => res.json(dbBook))
      //if error, catch it and give a 422 response as well as logging the error in the console
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      //if error, catch it and give a 422 response as well as logging the error in the console
      .catch(err => res.status(422).json(err));
  }
};
