'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lunch',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dinner',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Simple',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fancy',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
    await queryInterface.bulkInsert('Recipes', [{
      name: 'Gyoza',
      review: 'This is a great Gyoza recipe. The directions on frying then steaming were clear and concise. The only thing it needed was more salt.',
      description: 'A great Gyoza recipe that will leave you wanting more. Also great for freezing.',
      url: '',
      likes: 0,
      vegetarian: false,
      vegan: false,
      glutenfree: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Recipes', [{
      name: 'Bacon Pancakes',
      review: 'Great pancake recipe. Bacon in pancakes might take some getting used to, though. 4/5.',
      description: 'It speaks for itself, they are pancakes cooked with bacon in them',
      url: '',
      likes: 20,
      vegetarian: false,
      vegan: false,
      glutenfree: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    return await queryInterface.bulkInsert('RecipesCategories', [{
      recipesId: 1,
      categoriesId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      recipesId: 2,
      categoriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ])
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};