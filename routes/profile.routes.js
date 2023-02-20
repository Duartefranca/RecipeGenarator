const express = require('express');
const router = express.Router();
const recipies = require (`../models/recipe.model`)

router.get("/profile", (req, res, next) => {
    res.render("profile");
  });
  




router.get("/genarator", (req, res, next) => {
    recipies.find()
    .then (recipiesFromDB => {
        res.render("genarator"); // tenho ingredientes
    })
    .catch (err => console.log ("Error while displaying a form to create a recipie: ", err))
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