import React, { Component } from 'react'
import styles from './RecipeForm.module.css'

export default class RecipeForm extends Component {
    state = {
        name: '',
        url: '',
        description: '',
        review: 'review',
        vegetarian: false,
        vegan: false,
        glutenfree: false
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/recipes', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
        .then(res => res.json())
        .then(data => {
            this.props.history.push(`/api/recipes/${data.id}`)
        })
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleCheckboxChange = (e) => {
        const { checked, name } = e.target;
        this.setState ({
            [name]: checked
        })
    }
    render() {
        return (
            <div className={styles.RecipeForm}>
                <form onSubmit={this.handleFormSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Recipe Name</label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="url">Recipe URL</label>
                        <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Description</label>
                        <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="url">Review</label>
                        <input type="text" id="description" name="review" value={this.state.review} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <ul>
                            <li><label htmlFor="vegetarian">vegetarian</label><input type="checkbox" id="vegetarian" name="vegetarian"
                             checked={this.state.vegetarian} onChange={this.handleCheckboxChange}></input></li>
                        </ul>
                        <ul>
                            <li><label htmlFor="vegan">vegan</label><input type="checkbox" id="vegan" name="vegan"
                             checked={this.state.vegan} onChange={this.handleCheckboxChange}></input></li>
                        </ul>
                        <ul>
                            <li><label htmlFor="glutenfree">GF</label><input type="checkbox" id="glutenfree" name="glutenfree"
                             checked={this.state.glutenFree} onChange={this.handleCheckboxChange}></input></li>
                        </ul>
                    </div>
                    <button type="submit">Add Review</button>
                </form>
            </div>
        )
    }
}
