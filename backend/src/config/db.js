const mongoose = require("mongoose");
require("dotenv").config();

// const mongodbUrl = `mongodb+srv://shubhamtingare0661:${process.env.MONGO_PASS}@cluster0.rghci7k.mongodb.net/?retryWrites=true&w=majority`;
// const mongodbUrl = `mongodb+srv://shubhamtingare0661:9766Sstkit@cluster0.rghci7k.mongodb.net/?retryWrites=true&w=majority`;
const mongodbUrl = `mongodb+srv://shubhamtingare0661:9766Sstkit@cluster0.ouqcznw.mongodb.net/?retryWrites=true&w=majority`;
const connectDb = () => {
  return mongoose.connect(mongodbUrl);
};

module.exports = connectDb;
