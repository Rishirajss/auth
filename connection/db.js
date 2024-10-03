const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const Db = process.env.DATABASE;
console.log(Db);
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Durb_db");
    console.log("MongoDb Connect");
  } catch (err) {
    console.log("MongoDb Connect error", err);
    process.exit(1);
  }
};

module.exports = connectDB;
