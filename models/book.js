// Requiring mongoose to use our mongo db 
const mongoose = require("mongoose");
// declaring mongoose.Schema as the variable Schema
const Schema = mongoose.Schema;

// declaring bookSchema, essentially a database constructor prototype with the below-mentioned fields
const bookSchema = new Schema({
  //declaring title field as data-type String and required
  title: { type: String, required: true },
  //declaring subtitle field as data-type String and required
  subtitle: { type: String },
  //declaring authors field as data-type String and required
  authors: { type: [String], required: true },
  //declaring link field as data-type String and required
  link: { type: String, required: true },
  //declaring description field as data-type String and required
  description: { type: String, required: true },
  //declaring image field as data-type String and required
  image: { type: String, required: true },
  //declaring googleId field as data-type String, required, and unique
  googleId: { type: String, required: true, unique: true }
});

// Defining the variable Book equal to the mongoose model bookSchema
const Book = mongoose.model("Book", bookSchema);

// exporting Book to any file within DejitaruHonya
module.exports = Book;
