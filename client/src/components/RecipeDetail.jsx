import React, { Component } from 'react'
import LikesButton from './LikesButton';
import './RecipeDetail.css';

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      details: {},
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      glutenFree: "GlutenFree",
      loading: true,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;


    fetch(`/api/v1/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.vegetarian != true) {
          this.state.vegetarian = "notVegetarian";
        }
        if (data.vegan != true) {
          this.state.vegan = "notVegan"
        }
        if (data.glutenfree != true) {
          this.state.glutenFree = "gluten"
        }
        this.setState({
          details: data,
          loading: false,
        })
      })
  }

  render() {
    //   const container = {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    // }
    // const card = {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: '10px',
    //     border: 'solid 2px black',
    //     width: '30%',
    //     margin: '10px',
    //     fontSize: '5vh',
    //     backgroundColor: 'white'
    // }
    
    const { loading, details } = this.state;

    if (loading) {
      return <div>Loading...</div>
    }


    return (
      <div className="container">
        <div className="innerContainer">
          <div className="outerCard">
            <h2 className="cardHeader">{details.name}</h2>
            {/* <iframe src={`${details.url}`} /> */}
            <div className="innerCard">
              <p className="cardText">{details.review}</p>
              {/* <p className="cardText">{details.description}</p> */}
              <ul>
                <li className={this.state.vegan}><img src={`../../${this.state.vegan}.png`} className="icon"></img>Vegan</li>
                <li className={this.state.vegetarian}><img src={`../../${this.state.vegetarian}.png`} className="icon"></img>Vegetarian</li>
                <li className={this.state.glutenFree}><img src={`../../${this.state.glutenFree}.png`} className="icon"></img>Gluten Free</li>
              </ul>
              <LikesButton id={details.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
