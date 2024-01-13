const jwt = require("jsonwebtoken");
// require("dotenv").config();
const SECRET_KEY = "mynameisshubhamsanjaytingareandiamawebdeveloper";

const generateToken = async (userId) => {
  const payload = { userId };
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: "48h"
  });
  return token;
};

const getUserIdFromToken = async (token) => {
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    // console.log("userid is:", decodedToken.userId);
    return decodedToken.userId;
  } catch (error) {
    // console.log("the error encountered iss:", error);
    throw new Error(error.message);
  }
};

module.exports = { generateToken, getUserIdFromToken };
