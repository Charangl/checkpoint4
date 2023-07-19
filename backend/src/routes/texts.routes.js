const router = require("express").Router();
const textControllers = require("../controllers/textControllers");

router.get("/", textControllers.browse);
router.get("/:id", textControllers.read);
router.post("/", textControllers.add);

router.put("/:id", textControllers.edit);
router.delete("/:id", textControllers.destroy);

module.exports = router;
