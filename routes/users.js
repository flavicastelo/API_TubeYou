const router = require("express").Router();
const express = require("express");
const cors = require("cors");
const app = express();
const checkToken = require("../middware/authMidware");
app.use(cors());
const usersController = require("../controllers/usersController");

router.route("/register").post((req, res) => usersController.create(req, res));
router.route("/users").get((req, res) => usersController.getAll(req, res));
router.route("/users/:id").get( (req, res) => usersController.getId(req, res));
router.route("/users/delete/:id").delete(checkToken, (req, res) => usersController.delete(req, res));
router.route("/users/update/:id").put(checkToken, (req, res) => usersController.update(req, res));


module.exports = router;