const router = require("express").Router();
const writingControllers = require("../controllers/writingControllers");
const uploadControllers = require("../controllers/uploadControllers");
// const reviewControllers = require("./reviews.routes");

router.get("/", writingControllers.browse);
router.get("/:id", writingControllers.read);
// router.get("/:id", reviewControllers.allCommentByArticle);
router.post("/", uploadControllers.uploadArticleImage, writingControllers.add);

router.put("/:id", writingControllers.edit);
router.delete("/:id", writingControllers.destroy);

module.exports = router;
