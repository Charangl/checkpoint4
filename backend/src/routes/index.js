const router = require("express").Router();

const usersRouter = require("./users.routes");
const rabbitsRouter = require("./rabbits.routes");
const breedingsRouter = require("./breedings.routes");
const writingsRouter = require("./writings.routes");
const favoritesRouter = require("./favorites.routes");
const nodemailerRouter = require("./nodemailer.routes");
const reviewsRouter = require("./reviews.routes");

router.use("/users", usersRouter);
router.use("/rabbits", rabbitsRouter);
router.use("/breedings", breedingsRouter);
router.use("/writings", writingsRouter);
router.use("/favorites", favoritesRouter);
router.use("/nodemailer", nodemailerRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
