// requiring 'path' | I don't know what this does
const path = require("path");
// requiring express router
const router = require("express").Router();
// requiring our api routes from ./api and specifically the index.js file therin 
const apiRoutes = require("./api");

// adding the api routes to router.use
router.use("/api", apiRoutes);

//I believe this is designed to make the api routes useable from the build folder or the production env
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// exporting router and it's new functionality
module.exports = router;
