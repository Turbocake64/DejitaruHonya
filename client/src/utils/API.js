// importing axios to do our api routes / http requests
import axios from "axios";

// exporting the following 4 routes
export default {
  // getBooks get's all books from the API according to the title searched
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // getSavedBooks is an axios get call to retreave the books saved to db.Books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // deleteBook is an axios delete function removing a book from db.Book based on the id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // save book is a post request for api/books where a book is posted to the db.Books collection
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
