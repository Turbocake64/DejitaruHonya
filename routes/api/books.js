// requiring express router to make our api routes work
const router = require("express").Router();
// requiring bookController and all of it's exported db CRUD functions
const bookController = require("../../controllers/bookController");

//defining our root route or "/"
router.route("/")
  // our root route get route is the db.Book findAll function
  .get(bookController.findAll)
  // our root route post route is the db.Book create function
  .post(bookController.create);

router
  //defining our "/:id" route
  .route("/:id")
  // our "/:id" get route is the db.Book findbyId function
  .get(bookController.findById)
  // our "/:id" put route is the db.Book update function
  .put(bookController.update)
  // our "/:id" delete route is the db.Book remove function
  .delete(bookController.remove);

// exporting our routes as router
module.exports = router;
