import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer.jsx';
import ResultsContainer from './containers/ResultsContainer.jsx';

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
        console.log('button clicked!')
        e.preventDefault()
        const requestBody = {
            categories: e.target.optionDescription.value,
            location: e.target.optionLocation.value,
        }
        console.log(requestBody);
        fetch('/api/search/yelp', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((data) => {
                console.log(data, '<---- DATA IN FIRST THEN')
                return data.json();
            })
            .then((jsonData) => {
                console.log(jsonData, '<---- DATA IN SECOND THEN')
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
                <ResultsContainer />
            </div>
        )
    }
}

export default App;