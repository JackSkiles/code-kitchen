var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/recipes', function(req, res, next) {
  db.Recipes.findAll(
    {
      include: [{
        model: db.Categories,
        through: {
          attributes: []
        }
      }
    ]}
  ).then((data) => {
    res.json(data);
  }); 
});

router.get('/recipes/:id', (req, res) => {
  db.Recipes.findByPk(req.params.id, {
    include: [{
      model: db.Categories,
      through: {
        attributes: []
      }
    }]
  })
  .then(data => {
    res.json(data);
  })
})

router.post('/recipes', (req, res) => {
  const { name, review, description, url, likes, vegetarian, vegan, glutenfree, categories } = req.body

  console.log(categories);
  console.log(req.body);
  if (!name) { res.status(400).json({ error: 'name field is required' }); }
  if (!review) { res.status(400).json({ error: 'review field is required' }); }
  if (!url) { res.status(400).json({ error: 'url field is required' }); }

  db.Recipes.create({
    name: name,
    review: review,
    description: description || '',
    url: url,
    likes: likes || 0,
    vegetarian: vegetarian || false,
    vegan: vegan || false,
    glutenfree: glutenfree || false,
  })
    .then(recipe => {
      return recipe.addCategories(categories)
      .then(categories => {
        res.status(201).json(recipe);
      })
    })
      .catch(error => {
        if (error.name === 'SequelizeForeignKeyConstrainError') {
          res.json({error: 'Could not find all categories'})
        } else {
          res.json({error: 'Server Error'});
          console.log(error);
        }
      })
})

router.delete('/recipes/:id', (req, res) => {
  db.Recipes.destroy({
    where: {
      id: req.params.id
    }
  })  
  .then(result => {
    res.json({
      message: 'Recipe was deleted'
    })
  })
  .catch(err => {
    res.status(400).json({ err: 'Invalid recipe' })
  })
})

router.post('/recipes/:id/likes', (req, res) => {
  db.Recipes.findByPk(req.params.id)
    .then(recipe => {
      recipe.likes++
      return recipe.save();
    })
    .then(recipe => {
      res.json(recipe.likes)
    })
})


module.exports = router;
