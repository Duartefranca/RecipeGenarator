const express = require('express');
const router = express.Router();
const Recipe = require (`../models/Recipe.model`)
const axios = require("axios")

router.get("/profile", (req, res, next) => {
    res.render("profile");
  });
  
router.get("/genarator", (req, res, next) => {
  /* const userInput = req.query.title */
  try {
    axios.get(`https://api.spoonacular.com/recipes/random?number=9&apiKey=${process.env.APP_KEY}`)
      .then(responseFromApi => {
       // console.log(`olá`,responseFromApi.data)
console.log(responseFromApi.data.recipes[0])
        res.render("genarator", {recipes:responseFromApi.data.recipes})})
  } catch (error) {
    console.log(error)
  }
  });

  /* router.post("/genarator", (req, res, next) => {
    const { title, servings, image, summary, dishTypes, cuisines} = req.body;
    Recipe.create ({ title, servings, image, summary, dishTypes, cuisines})
    .then (newRecipie => {
        res.redirect ("genarator")

    })
    .catch (err => console.log ("Error while creating a recipie:", err))
        
      });
 */
module.exports = router;