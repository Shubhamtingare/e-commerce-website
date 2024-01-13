const express = require("express");
const router = express.Router();

const cartItemController = require("../controllers/cartItem_controller");
const authenticate = require("../middlewares/authenticate");

router.put("/:id", authenticate, cartItemController.updateCartItem);
router.delete("/:id", authenticate, cartItemController.removeCartItem);

module.exports = router;
