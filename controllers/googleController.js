// requiring axios to make our http requests
const axios = require("axios");
// require our models
const db = require("../models");

// exporting all of our http requests
module.exports = {
  // findAll is a read request to the google books api based on the submitted search
  findAll: function(req, res) {
    // defining the request as the perameters of the query
    const { query: params } = req;
    axios
    // an axios get request of the params on line 15
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      // then taking the results and processig them like so
      .then(results =>
        // filtering results.data.items into each item's values below
        results.data.items.filter(
          result =>
            // getting the title
            result.volumeInfo.title &&
            // and getting the info link
            result.volumeInfo.infoLink &&
            // and getting the authors
            result.volumeInfo.authors &&
            // and getting the description
            result.volumeInfo.description &&
            // and getting the image link
            result.volumeInfo.imageLinks &&
            // and getting the thumbnail of the image link
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // I'm not 100% on this section
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
