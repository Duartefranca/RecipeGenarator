const { Schema, model } = require("mongoose");


const recipeSchema = new Schema(
  {
    recipename: {
      type: String,      
    },
    mainIngredient: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    preparation: {
      type: String,
    },
    time: {
      type: String,
    },
    dishType: {
      type: String,
    },
    imgURL: {
      type: String,
    },
    dishCountry: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
