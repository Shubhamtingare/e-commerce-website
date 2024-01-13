const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/review_controller");
const authenticate = require("../middlewares/authenticate");

router.post("/create", authenticate, reviewController.createReview);
router.get("/product/:productId", authenticate, reviewController.getAllReview);

module.exports = router;
