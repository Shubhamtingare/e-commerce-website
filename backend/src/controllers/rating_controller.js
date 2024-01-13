const ratingService = require("../services/rating_service");

const createRating = async (req, res) => {
  const user = await req.user;
  try {
    const review = await ratingService.createRating(req.body, user);
    return res.status(201).send(review);
  } catch (error) {
    return res.staus(500).send({ error: error.message });
  }
};

const getAllRating = async (req, res) => {
  const productId = await req.params.productId;
  try {
    const review = await reviewService.getAllRating(productId);
    return res.status(201).send(review);
  } catch (error) {
    return res.staus(500).send({ error: error.message });
  }
};

module.exports = {
  createRating,
  getAllRating,
};
