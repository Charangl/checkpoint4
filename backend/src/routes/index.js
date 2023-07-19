const router = require("express").Router();

const usersRouter = require("./users.routes");
const rabbitsRouter = require("./rabbits.routes");
const breedingsRouter = require("./breedings.routes");
const textsRouter = require("./texts.routes");
const favoritesRouter = require("./favorites.routes");

router.use("/users", usersRouter);
router.use("/rabbits", rabbitsRouter);
router.use("/breedings", breedingsRouter);
router.use("/texts", textsRouter);
router.use("/favorites", favoritesRouter);

module.exports = router;
