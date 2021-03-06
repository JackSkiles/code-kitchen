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
      name: 'The Meat Stick',
      review: 'much meat',
      description: 'a stick of meat',
      url: 'http://meat.com',
      likes: 0,
      vegetarian: false,
      vegan: false,
      glutenfree: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Recipes', [{
      name: 'Bacon Pancakes',
      review: 'Bacon pancakes makin bacon pancakes, take some bacon and you put it in a pancake',
      description: 'They are pancakes cooked with bacon in them',
      url: 'http://bCakes.com',
      likes: 20,
      vegetarian: false,
      vegan: false,
      glutenfree: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Recipes', [{
      name: 'Irohs Tea',
      review: 'This tea is the best in Ba Sing Sei',
      description: 'It is a good green tea.',
      url: 'http://tea.com',
      likes: 15,
      vegetarian: true,
      vegan: true,
      glutenfree: true,
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
    },
    {
      recipesId: 3,
      categoriesId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
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