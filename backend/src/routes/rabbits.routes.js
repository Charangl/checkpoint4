const router = require("express").Router();
const rabbitControllers = require("../controllers/rabbitControllers");

router.get("/", rabbitControllers.browse);
router.get("/:id", rabbitControllers.read);
router.post("/", rabbitControllers.add);

router.put("/:id", rabbitControllers.edit);
router.delete("/:id", rabbitControllers.destroy);

module.exports = router;
