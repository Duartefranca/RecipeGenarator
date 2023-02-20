const express = require('express');
const router = express.Router();
const recipies = require (`../models/recipe.model`)

router.get("/profile", (req, res, next) => {
    res.render("profile");
  });
  




router.get("/genarator", (req, res, next) => {
    
    res.render("genarator"); // tenho ingredientes 
  });

  router.post("/genarator", (req, res, next) => {
    // recebe info do user 
    // faz chamada a api 
    // recebe a info da api 
    // envia para a view.
        res.render("genarator");
      });






module.exports = router;