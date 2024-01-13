const express = require("express");
const router = express.Router();

const orderController = require("../controllers/admin_order_controller");
const authenticate = require("../middlewares/authenticate");

router.get("/", authenticate, orderController.getAllOrders);

router.put(
  "/:orderId/confirmed",
  authenticate,
  orderController.confirmedOrders
);
router.put("/:orderId/ship", authenticate, orderController.shipOrders);
router.put("/:orderId/delete", authenticate, orderController.deleteOrders);
router.put("/:orderId/deliver", authenticate, orderController.deliverOrders);
router.put("/:orderId/cancel", authenticate, orderController.cancelOrders);

module.exports = router;
