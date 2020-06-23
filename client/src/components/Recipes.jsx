import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Recipes extends Component {
    constructor() {
        super();

        this.state = {
            recipes: [],
            removed: []
        }
    }

    componentDidMount(){
        fetch('/api/v1/recipes')
            .then(res => res.json())
            .then(data => {
                this.setState({ recipes: data })
            })
    }

    remove = (indexToRemove) => {
        console.log("Hello")
        const removed = this.state.recipes.filter((recipes, index) => {
          return index != indexToRemove;
        })
        this.setState({recipes: removed}, () => {
          console.log(removed);
        })
    }

    // remove = (indexToRemove) => {
    //     fetch(`/api/v1/recipes/${indexToRemove}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }
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
            <div>
                { this.state.recipes.map((recipe, index) => {
                    return (
                        <div style={container}>
                            <div key={recipe.id}  style={outerCard}>
                                <h2>{ recipe.name }</h2>
                                <div key={recipe.id} style={innerCard}>
                                    <h4>{ recipe.review }</h4>
                                    <Link to={`/recipes/${recipe.id}`}>Show Details</Link>
                                    <button type="submit" onClick={() => this.remove(index) }>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
