const express = require('express');
const router = express.Router();
const Recipe = require (`../models/Recipe.model`)
const axios = require("axios")

  
router.get("/ingredient", (req, res, next) => {
  /* const userInput = req.query.title */
  try {
    axios.get(`https://api.spoonacular.com/recipes/findByIngredients?number=10&apiKey=${process.env.APP_KEY}`)
      .then(responseFromApi => {
       // console.log(`olá`,responseFromApi.data)
console.log(responseFromApi.data.recipes[0])
        res.render("ingredient", {recipes:responseFromApi.data.recipes})})
  } catch (error) {
    console.log(error)
  }
  });

  
module.exports = router;