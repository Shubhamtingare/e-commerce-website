const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/rating_controller");
const authenticate = require("../middlewares/authenticate");

router.post("/create", authenticate, ratingController.createRating);
router.put("/product/:productId", authenticate, ratingController.getAllRating);

module.exports = router;
