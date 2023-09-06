const router = require("express").Router();
const reviewControllers = require("../controllers/reviewControllers");

router.get("/", reviewControllers.browse);
router.get("/:id", reviewControllers.read);
router.post("/", reviewControllers.add);

router.put("/:id", reviewControllers.edit);
router.delete("/:id", reviewControllers.destroy);

module.exports = router;
