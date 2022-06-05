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
      <div style={container}>
        <div className="innerContainer">
          {this.state.recipes.map(recipe => {
            return (
              <div key={recipe.id} className="outerCard" >
                <h1 className="cardHeader2">{recipe.name}</h1>
                <div className="innerCard">
                  <p>{recipe.description}</p>
                  <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                  <LikesButton id={recipe.id} />
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
