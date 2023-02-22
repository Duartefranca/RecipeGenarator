const express = require('express');
const router = express.Router();
const Recipe = require (`../models/Recipe.model`)
const axios = require("axios")

router.get("/ingredient", (req, res, next) => {
    res.render("ingredient");
  });


router.post("/ingredient", (req, res, next) => {
  const {userInput} = req.body
// replace guardar numa nova variavél e substituir no link 


  try {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${userInput}&apiKey=${process.env.APP_KEY}`)
      .then(responseFromApi => {
       
        res.render("ingredient", {recipes: responseFromApi.data.results})})
  } catch (error) {
    console.log(error)
  }
  });

  
module.exports = router;