const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/user_service");

const authenticate = async (req, res, next) => {
  try {
    // console.log(req.headers.AUTHORIZATION);
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token);
    if (!token) {
      return res.status(404).send({ error: "Token not found" });
    }

    const userId = await jwtProvider.getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).send({ error: "Invalid token" });
    }

    const user = await userService.findUserById(userId);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = authenticate;
