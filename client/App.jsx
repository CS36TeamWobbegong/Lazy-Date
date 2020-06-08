import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer.jsx';
import ResultsContainer from './containers/ResultsContainer.jsx';

import './styles.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //results from server
            results: [],
            optionCategory: ["games", "arts and culture", "outdoor", "culinary"],
            optionDescription: ["fun", "adventure", "relaxation", "entertainment"],
            optionLocation: [
                { city: "Santa Monica", zipcode: 90401 },
                { city: "West Hollywood", zipcode: 90069 },
                { city: "Studio City", zipcode: 91604 },
                { city: "DTLA", zipcode: 90017 }
            ]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const categories = `${e.target.optionDescription.value},${this.state.optionCategory[Math.floor(Math.random() * this.state.optionCategory.length)]}`;
        const location = e.target.optionLocation.value;

        fetch(`/api/search/yelp/${categories}/${location}`)
            .then((data) => {
                return data.json();
            })
            .then((jsonData) => {
                this.setState({
                    results: jsonData
                })
            })
            .catch((err) => {
                console.log("ERROR IN CATCH OF ADD RESULTS", err)
            })
    }

    render() {
        return (
            <div>
                <h1 className="title">Better Together</h1>
                <CategoriesContainer handleSubmit={this.handleSubmit} optionLocation={this.state.optionLocation} optionDescription={this.state.optionDescription} />
                <ResultsContainer results={this.state.results} />
            </div>
        )
    }
}

export default App;