// For schema and model....

const mongoose = require("mongoose");

const schemas = new mongoose.Schema({
  name: String,
  age: Number,
  desc: String,
});

module.exports = mongoose.model("first", schemas)