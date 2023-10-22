const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
  size: {
    type: String,
    require: true,
    trim: true,
  },
  dietary: {
    type: String,
    require: true,
    trim: true,
  },
  cuisine: {
    type: String,
    require: true,
    trim: true,
  },
  avoid: {
    type: String,
    require: true,
    trim: true,
  },
  nutrition: {
    type: String,
    require: true,
    trim: true,
  },
  calories: {
    type: String,
    require: true,
    trim: true,
  },
  method: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("Recipes", recipeSchema);
