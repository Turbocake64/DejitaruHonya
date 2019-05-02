
// requiring express router to make our routes
const router = require("express").Router();
// requiring our googleController from the eponymous js file
const googleController = require("../../controllers/googleController");

//defining our root route or "/"
router
  .route("/")
  // our get route is the googleController.findAll
  .get(googleController.findAll);

// exporting the router
module.exports = router;
