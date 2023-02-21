const express = require('express');
const router = express.Router();
const recipies = require (`../models/recipe.model`)
const axios = require("axios")

router.get("/profile", (req, res, next) => {
    res.render("profile");
  });
  
router.get("/genarator", (req, res, next) => {
  /* const userInput = req.query.title */
  try {
    axios.get("https://api.spoonacular.com/recipes/716429/information?apiKey=48b92b3163ea49a98c858a6820b99917")
      .then(responseFromApi => {
        console.log(responseFromApi)
        res.render("genarator", {responseFromApi})})
      
        

  } catch (error) {
    console.log(error)
  }
    /* axios.get("https://api.spoonacular.com/recipes/complexSearch")
.then(responseFromApi => res.render("genarator", {responseFromApi}))

.catch(error => console.log (error)); */

  });

  router.post("/genarator", (req, res, next) => {
    recipies.create (req.body)
    .then (newRecipie => {
        res.redirect ("genarator")

    })
    .catch (err => console.log ("Error while creating a recipie:", err))
    // recebe info do user 
    // faz chamada a api 
    // recebe a info da api 
    // envia para a view.
        
      });






module.exports = router;