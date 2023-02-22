const router = require('express').Router();
const Recipe = require('../models/Recipe.model');
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

   const {title, instructions, servings, cuisines, dishTypes, image} = response.data

   await Recipe.create({title, instructions, servings, cuisines, dishTypes, image})

    res.redirect('/')
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.get('/create', async (req, res, next) => {
  try {
    const allRecipes = await Recipe.find()
    res.render('recipies/create', {allRecipes})
  } catch (error) {
    
  }
});

router.post('/create', fileUploader.single('imgURL'), async (req, res, next) => {
  try {
    let imgURL;

    const { title, servings, instructions, dishTypes, cuisines } = req.body;

    if (req.file) {
      imgURL = req.file.path;
    } else {
      imgURL = 'https://img.freepik.com/fotos-premium/despertador-em-uma-placa-branca-com-uma-faca-e-um-garfo-no-fundo-azul_169016-21306.jpg?w=826';
    }

    await Recipe.create({ title, servings, instructions, dishTypes, cuisines, image: imgURL });

    res.redirect('/');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/edit/:id', async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.render('recipies/edit', recipe);
  } catch (error) {
    next(error);
  }
});

router.post('/edit/:id', fileUploader.single('image'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, servings, instructions, dishTypes, cuisines } = req.body;

    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      const recipe = await Recipe.findById(id);
      imageUrl = recipe.image;
    }

    await Recipe.findByIdAndUpdate(id,{ title, servings, instructions, dishTypes, cuisines, image: imageUrl });

    res.redirect('/recipes/myrecipes');
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.post('/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await api.deleteCharacter(id);

    res.redirect('/');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
