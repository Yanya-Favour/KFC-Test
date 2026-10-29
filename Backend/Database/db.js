const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const db = (process.env.MONGODB_URI || "mongodb://localhost:27017/kfc_clone")
  .trim()
  .replace(/^(mongodb(?:\+srv)?:\/\/)\s+/, "$1");
const connection = mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = connection;