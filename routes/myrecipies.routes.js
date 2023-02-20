const router = require('express').Router();
const Recipie = require('../models/recipe.model');
const fileUploader = require('../config/cloudinary.config');

router.get('/myrecipies', async (req, res) => {
  try {
    const recipe = await Recipie.find();
    res.render('recipies/myrecipies', { recipies });
  } catch (error) {
    next(error);
  }
});

router.get('/create', (req, res) => res.render('recipie/create'));

router.post('/create', fileUploader.single('imgURL'), async (req, res, next) => {
    let imgURL;
  try {
    const { recipename, mainIngredient,ingredients, preparation, dishType, imgURL, dishCountry } = req.body;

    if (req.file) {
        imgURL = req.file.path;
    } else {
        imgURL = "https://img.freepik.com/fotos-premium/despertador-em-uma-placa-branca-com-uma-faca-e-um-garfo-no-fundo-azul_169016-21306.jpg?w=826";
    }

    await Recipie.create({ recipename, mainIngredient,ingredients, preparation, dishType,imgURL, dishCountry });

    res.redirect('/');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const recipe = await Recipie.findById(req.params.id);
    res.render('recipie/edit', movie);
  } catch (error) {
    next(error);
  }
});

router.post('/edit/:id', fileUploader.single('poster'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { recipename, mainIngredient,ingredients, preparation, dishType,imgURL, dishCountry } = req.body;
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    await Movie.findByIdAndUpdate(id, { recipename, mainIngredient,ingredients, preparation, dishType,imgURL, dishCountry });

    res.redirect('/recipies/list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;