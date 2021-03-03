const router = require("express").Router();
const {
  test,
  getAll,
  postBlog,
  findOne,
} = require("../controllers/BlogController");
const { deleteOne } = require("../models/Blog");

// router.get("/", getAll);
// router.post("/", postBlog);

router.route("/").get(getAll).post(postBlog);

// router.get("/:id", findOne);
// router.patch("/:id", updateOne);

router.route("/").get(findOne).delete(deleteOne).patch(updateOne);

module.exports = router;
