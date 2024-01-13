const cartItemService = require("../services/cartItem_service");

const updateCartItem = async (req, res) => {
  const user = await req.user;
  // console.log("user is::", user);
  // console.log("req body is:", req.body);
  try {
    const updatedCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    // console.log("updated cart item is:", updatedCartItem);
    return res.status(200).send(updatedCartItem);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

const removeCartItem = async (req, res) => {
  const user = await req.user;
  try {
    await cartItemService.removeCartItem(user._id, req.params.id);
    return res.status(200).send({ message: "cart item removed successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { updateCartItem, removeCartItem };
