import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LikesButton from './LikesButton';

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
    const newRecipe = this.state.recipes.find((recipe)=> recipe.id === id)
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
        justifyContent: 'center'
    }
    const outerCard = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        border: 'solid 2px black',
        width: '30%',
        margin: '10px',
        backgroundColor: 'rgba(189, 232, 234)' 
    }
    const innerCard = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        border: 'solid 2px black',
        width: '90%',
        margin: '10px',
        backgroundColor: 'white'
    }
    return (
      <div style={container}>
        { this.state.recipes.map(recipe => {
          return (
            <div key={recipe.id} style={outerCard} >
              <h1>{ recipe.name }</h1>
              <div style={innerCard}>
                <p>{ recipe.description }</p>
                <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                <LikesButton id={recipe.id} />
              </div>
            </div>
          )
        })}
        <Link to="/recipes/new">Submit a review</Link>
      </div>
    )
  }
}
