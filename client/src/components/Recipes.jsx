import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LikesButton from './LikesButton';
import './Recipes.css';

export default class Recipes extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/recipes')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recipes: data
        })
      })
  }

  handleLike = (id, newLikes) => {
    const newRecipe = this.state.recipes.find((recipe) => recipe.id === id)
    newRecipe.likes = newLikes
    const newRecipes = this.state.recipes.map(recipe => {
      if (recipe.id === id) {
        return newRecipe
      }
      return recipe;
    })
    this.setState({
      recipes: newRecipes
    })
  }

  render() {

    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return (
      <div style={container} id="main">
        <div className="infoCont">
          <p className="infoText">Welcome to Code Kitchen, the full stack React app.
            Click on submit review to save a review of recipes you find on the internet.
            After submitting the review it can be viewed on the front page, and people can add likes to it. Have fun adding recipes!
          </p>
        </div>
        <div className="innerContainer">
          {this.state.recipes.map(recipe => {

            return (
              <div key={recipe.id} className="outerCard" >
                <h2 className="cardHeader2">{recipe.name}</h2>
                <div className="innerCard">
                  <p className="recipeText">{recipe.description}</p>
                  <div>
                    <LikesButton id={recipe.id} className="likes" />
                    <Link to={`/recipes/${recipe.id}`} className="recipeLink">Show Details</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Link to="/recipes/new">Submit a review</Link>
      </div>
    )
  }
}
