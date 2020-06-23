import React, { Component } from 'react'
import styles from './RecipeForm.module.css'

export default class RecipeForm extends Component {
    state = {
        name: '',
        url: '',
        description: '',
        review: '',
        vegetarian: false,
        vegan: false,
        glutenFree: false
    }

    handleFormSubmit = () => {

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
                            <li><label htmlFor="">vegetarian</label><input type="checkbox" name="vegetarian"
                             checked={this.state.vegetarian} onChange={this.handleCheckboxChange}></input></li>
                        </ul>
                        <ul>
                            <li><label htmlFor="">vegan</label><input type="checkbox" name="vegan"
                             checked={this.state.vegan} onChange={this.handleCheckboxChange}></input></li>
                        </ul>
                        <ul>
                            <li><label htmlFor="">GF</label><input type="checkbox" name="glutenFree"
                             checked={this.state.glutenFree} onChange={this.handleCheckboxChange}></input></li>
                        </ul>
                    </div>
                    <button type="submit">Add Review</button>
                </form>
            </div>
        )
    }
}
