const router = require("express").Router();
const writingControllers = require("../controllers/writingControllers");
const uploadControllers = require("../controllers/uploadControllers");

router.get("/", writingControllers.browse);
router.get("/:id", writingControllers.read);
router.post("/", uploadControllers.uploadArticleImage, writingControllers.add);

router.put("/:id", writingControllers.edit);
router.delete("/:id", writingControllers.destroy);
router.post("/comment", writingControllers.addComment);

module.exports = router;
