const express = require("express");
const Recipes = require("../models/recipe");

const router = express.Router();

//add recipes
router.post("/recipes/add", async (req, res) => {
  const {
    name,
    email,
    size,
    dietary,
    cuisine,
    avoid,
    nutrition,
    calories,
    method,
  } = req.body;

  try {
    const newRecipe = new Recipes({
      name,
      email,
      size,
      dietary,
      cuisine,
      avoid,
      nutrition,
      calories,
      method
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(422).json(err);
  }
});

//get all recipes
router.get("/recipes", async (req, res) => {
  try {
    const recipe = await Recipes.find();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(422).json(err);
  }
});

//get a recipe
router.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipes.findById({ _id: id });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(422).json(err);
  }
});

//update recipes
router.put("/recipes/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRecipe = await Recipes.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedRecipe);
  } catch (error) {
    res.status(422).json(error);
  }
});

//delete recipes
router.delete("/recipes/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipes.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedRecipe);
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
