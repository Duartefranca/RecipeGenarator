const router = require('express').Router();
const Recipe = require('../models/recipe.model');
const fileUploader = require('../config/cloudinary.config');
const axios = require('axios')

router.get('/myrecipies', async (req, res) => {
  try {
    const recipe = await Recipe.find();
    res.render('recipies/myrecipies', { recipies });
  } catch (error) {
    next(error);
  }
});

router.post('/add/:api_id', async(req, res, next) => {
  try {
    const {api_id} = req.params
   const response = await axios.get(`https://api.spoonacular.com/recipes/${api_id}/information?apiKey=${process.env.APP_KEY}`)

   const {title, summary, servings, cuisines, dishTypes, image} = response.data

   await Recipe.create({title, summary, servings, cuisines, dishTypes, image})

    res.redirect('/')
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.get('/create', (req, res) => res.render('recipie/create'));

router.post('/create', fileUploader.single('imgURL'), async (req, res, next) => {
    let imgURL;
  try {
    const { title, servings, image, summary, dishTypes, cuisines } = req.body;

    if (req.file) {
        imgURL = req.file.path;
    } else {
        imgURL = "https://img.freepik.com/fotos-premium/despertador-em-uma-placa-branca-com-uma-faca-e-um-garfo-no-fundo-azul_169016-21306.jpg?w=826";
    }

    await Recipe.create({ title, servings, image, summary, dishTypes, cuisines});

    res.redirect('/');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.render('recipie/edit', movie);
  } catch (error) {
    next(error);
  }
});

router.post('/edit/:id', fileUploader.single('poster'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, servings, image, summary, dishTypes, cuisines } = req.body;
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    await Movie.findByIdAndUpdate(id, { title, servings, image, summary, dishTypes, cuisines });

    res.redirect('/recipies/list');
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;