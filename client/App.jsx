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
            optionCategory: ["Games", "Arts and culture", "Outdoor", "Culinary"],
            optionDescription: ["Fun", "Adventure", "Relaxation", "Entertainment"],
            optionLocation: [
                { city: "Santa Monica", zipcode: 90401 },
                { city: "West Hollywood", zipcode: 90069 },
                { city: "Studio City", zipcode: 91604 },
                { city: "Downtown LA", zipcode: 90017 }
            ],
            dateType: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.randomize = this.randomize.bind(this);
    }

    randomize() {
        // grab one random category
        const category = this.state.optionCategory[Math.floor(Math.random() * this.state.optionCategory.length)];
        const description = this.state.optionDescription[Math.floor(Math.random() * this.state.optionDescription.length)];
        // one random description
        this.setState({
            dateType: `${category},${description}`
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        const categories = `${this.state.dateType}`;
        const location = e.target.location.value;
        if (location === "Select one..." || !categories){
            return;
        }
        
        fetch(`/api/search/yelp/${categories}/${location}`)
            .then((data) => data.json())
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
                <CategoriesContainer handleSubmit={this.handleSubmit} optionLocation={this.state.optionLocation} optionDescription={this.state.optionDescription} randomize={this.randomize} dateType={this.state.dateType} />
                <ResultsContainer results={this.state.results} />
            </div>
        )
    }
}

export default App;