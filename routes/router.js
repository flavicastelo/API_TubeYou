const router = require("express").Router();

const videosRouter = require("./videos");
router.use("/", videosRouter);

const usersRouter = require("./users");
router.use("/", usersRouter);

module.exports = router;