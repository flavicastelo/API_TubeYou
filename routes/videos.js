const router = require("express").Router();

const videosController = require("../controllers/videosController");

router.route("/videos").post((req, res) => videosController.create(req, res));
router.route("/videos").get((req, res) => videosController.getAll(req, res));
router.route("/videos/:id").get((req, res) => videosController.get(req, res));
router.route("/videos/:id").delete((req, res) => videosController.delete(req, res));
router.route("/videos/:id").put((req, res) => videosController.update(req, res));


module.exports = router;