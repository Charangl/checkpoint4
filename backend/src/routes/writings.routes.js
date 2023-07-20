const router = require("express").Router();
const writingControllers = require("../controllers/writingControllers");

router.get("/", writingControllers.browse);
router.get("/:id", writingControllers.read);
router.post("/", writingControllers.add);

router.put("/:id", writingControllers.edit);
router.delete("/:id", writingControllers.destroy);

module.exports = router;
