const reviewService = require("../services/review_service");

const createReview = async (req, res) => {
  const user = await req.user;
  try {
    const review = await reviewService.createReview(req.body, user);
    return res.status(201).send(review);
  } catch (error) {
    return res.staus(500).send({ error: error.message });
  }
};

const getAllReview = async (req, res) => {
  const productId = await req.params.productId;
  try {
    const review = await reviewService.getAllReview(productId);
    return res.status(201).send(review);
  } catch (error) {
    return res.staus(500).send({ error: error.message });
  }
};

module.exports = {
  createReview,
  getAllReview,
};
