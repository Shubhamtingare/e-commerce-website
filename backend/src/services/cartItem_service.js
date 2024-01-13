const CartItem = require("../models/cartItem_model");
const userService = require("../services/user_service");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    // console.log(userId, cartItemId, cartItemData);
    const item = await findCartItemById(cartItemId);
    // console.log("item :", item);

    if (!item) {
      throw new Error("cart item not found : ", cartItemId);
    }

    const user = await userService.findUserById(item.userId);
    // console.log("here user::", user);

    if (!user) {
      throw new Error("User not found with : ", userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      // console.log("updated is::", updatedCartItem);
      return updatedCartItem;
    } else {
      throw new Error("You can't update this cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  } else {
    throw new Error("You can't remove another user's item");
  }
}

async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  if (cartItem) {
    return cartItem;
  }
  throw new Error("Cart item not found with id : " + cartItemId);
}

module.exports = { updateCartItem, removeCartItem, findCartItemById };
