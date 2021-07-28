const express = require("express");
const OrderController = require("../controllers/order.controller");
const router = express.Router();

router.route("/create").post(OrderController.createOrder);

router.route("/search/:orderId").get(OrderController.getOrderByOrderId);

router.route("/list/:date").get(OrderController.getOrderByOrderDate);

router.route("/delete/:orderId").get(OrderController.deleteOrderByOrderId);
// router.route("/delete/:orderId").delete(OrderController.deleteOrderByOrderId); //can use this for delete

router.route("/update/:orderId/:deliveryDate").get(OrderController.updateOrder);

router.route("/get/all").get(OrderController.getAllOrders);

module.exports = router;
