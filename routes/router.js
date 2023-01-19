const router = require("express").Router();

const videosRouter = require("./videos");
router.use("/", videosRouter);
const loginRouter = require("./login");
router.use("/", loginRouter);
const usersRouter = require("./users");
router.use("/", usersRouter);

module.exports = router;