const router = require("express").Router();
const rabbitControllers = require("../controllers/rabbitControllers");
const authControllers = require("../controllers/authControllers");
const uploadControllers = require("../controllers/uploadControllers");

router.get("/", rabbitControllers.browse);
router.get("/:id", rabbitControllers.read);

router.use(authControllers.verifyToken, authControllers.isAdmin);
router.post("/", uploadControllers.uploadRabbitPhoto, rabbitControllers.add);
router.put("/:id", rabbitControllers.edit);
router.delete("/:id", rabbitControllers.destroy);

module.exports = router;
