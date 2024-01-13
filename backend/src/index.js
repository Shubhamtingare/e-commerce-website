const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "welcome to ecommerce api" });
});

const authRouters = require("./routes/auth_router");
app.use("/auth", authRouters);

const userRouters = require("./routes/user_router");
app.use("/api/users", userRouters);

const productRouter = require("./routes/customer_product_router");
app.use("/api/products", productRouter);

const adminProductRouter = require("./routes/admin_product_router");
app.use("/api/admin/products", adminProductRouter);

const cartRouter = require("./routes/cart_router");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./routes/cartItem_router");
app.use("/api/cart_items", cartItemRouter);

const orderRouter = require("./routes/order_router");
app.use("/api/orders", orderRouter);

const adminOrderRouter = require("./routes/admin_order_router");
app.use("/api/admin/orders", adminOrderRouter);

const reviewRouter = require("./routes/review_router");
app.use("/api/reviews", reviewRouter);

const ratingRouter = require("./routes/rating_router");
app.use("/api/ratings", ratingRouter);

module.exports = app;
