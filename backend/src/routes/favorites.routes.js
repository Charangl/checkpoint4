const router = require("express").Router();
const favoriteControllers = require("../controllers/favoriteControllers");

router.get("/", favoriteControllers.browse);
router.get("/:id", favoriteControllers.read);
router.post("/", favoriteControllers.add);

router.put("/:id", favoriteControllers.edit);
router.delete("/:id", favoriteControllers.destroy);

module.exports = router;
