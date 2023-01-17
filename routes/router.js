const router = require("express").Router();

const videosRouter = require("./videos");
router.use("/", videosRouter);

const usersRouter = require("./users");
router.use("/", usersRouter);

const loginRouter = require("./login");
router.use("/", loginRouter);

module.exports = router;