const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userID: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);