const router = require("express").Router();
const checkToken = require("../middware/authMidware");

const videosController = require("../controllers/videosController");

router.route("/videos/register").post(checkToken, (req, res) => videosController.create(req, res));
router.route("/videos").get((req, res) => videosController.getAll(req, res));
router.route("/videos/:id").get( (req, res) => videosController.get(req, res));
router.route("/videos/delete/:id").delete(checkToken, (req, res) => videosController.delete(req, res));
router.route("/videos/update/:id").put((req, res) => videosController.update(req, res));


module.exports = router;