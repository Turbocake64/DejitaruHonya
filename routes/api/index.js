// requiring the path | not sure what this does
const path = require("path");
// requiring express router
const router = require("express").Router();
// requiring the routes from routes/api/books
const bookRoutes = require("./books");
// requiring the routes from routes/api/google
const googleRoutes = require("./google");

// adding the routes in /books to router.use
router.use("/books", bookRoutes);

// adding the routes in /google to router.use
router.use("/google", googleRoutes);

// exports the router and it's new routes
module.exports = router;
