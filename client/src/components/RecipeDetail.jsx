import React, { Component } from 'react'

export default class RecipeDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             details: {},
             loading: true
        }
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({details: data, loading: false})
            })
    }

    render() {
        const { loading, details } = this.state;
        if (loading) {
            return <div>Loading</div>
        }

        return (
            <div className="RecipeDetail">
                {details.name}
            </div>
        )
    }
}
