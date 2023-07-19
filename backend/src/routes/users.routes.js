const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);
router.post(
  "/",
  userControllers.hashPassword,
  userControllers.add,
  userControllers.read
);
router.post("/login", userControllers.login, authControllers.createToken);
router.put("/:id", userControllers.edit);
router.delete("/:id", userControllers.destroy);

module.exports = router;
