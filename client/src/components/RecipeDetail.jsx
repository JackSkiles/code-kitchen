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
        const container = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
        const card = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            border: 'solid 2px black',
            width: '30%',
            margin: '10px',
            fontSize: '10vh',
            backgroundColor: 'white'
        }
        const { loading, details } = this.state;
        if (loading) {
            return <div>Loading</div>
        }

        return (
            <div className="RecipeDetail" style={container}>
                <div style={card}>
                    {details.name}
                </div>
            </div>
        )
    }
}
