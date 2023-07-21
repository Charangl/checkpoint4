const router = require("express").Router();
const breedingControllers = require("../controllers/breedingControllers");

router.get("/", breedingControllers.browse);
router.get("/:id", breedingControllers.read);
router.post("/", breedingControllers.add);

router.put("/:id", breedingControllers.edit);
router.delete("/:id", breedingControllers.destroy);

module.exports = router;
