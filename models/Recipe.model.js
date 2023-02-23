const { Schema, model } = require("mongoose");


const recipeSchema = new Schema(
  {
    title: {
      type: String,      
    },
    servings: {
      type: Number,
    },
    instructions:{
      type: String,

    },
    image: {
      type: String,
    },
    summary: {
      type: String,
    },
    dishTypes: {
      type: [String],
    },
    cuisines: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
