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
            optionCategory: ["Games", "Arts and Culture", "Hiking", "Live Shows", "Relaxation"],
            optionDescription: ["Fun"],
            optionLocation: [
                { city: "Arts District", zipcode: 90013 },
                { city: "Beverly Hills", zipcode: 90210 },
                { city: "Burbank", zipcode: 91505 },
                { city: "Culver City", zipcode: 90232 },
                { city: "DTLA", zipcode: 90017 },
                { city: "Glendale", zipcode: 91204 },
                { city: "Hollywood", zipcode: 90028 },
                { city: "Koreatown", zipcode: 90010 },
                { city: "Los Feliz", zipcode: 90027 },
                { city: "Mid City", zipcode: 90019 },
                { city: "NoHo", zipcode: 91606 },
                { city: "Santa Monica", zipcode: 90401 },
                { city: "Sherman Oaks", zipcode: 91403 },
                { city: "Silverlake", zipcode: 90026 },
                { city: "Studio City", zipcode: 91604 },
                { city: "Venice", zipcode: 90292 },
                { city: "WeHo", zipcode: 90069 },
            ],
            favorites: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addToFavs = this.addToFavs.bind(this);
    }


    addToFavs(e) {
        // add event to favorites array in state, if event does not already exist in favorites
        let object = this.state.favorites[e.target.id];

        let temp = this.state.favorites;
        if (!this.state.results.includes(object)) {
            temp.push(this.state.results[e.target.id])
            this.setState({
                favorites: temp
            })
        }
    }

    componentDidUpdate() {
        console.log(this.state.favorites, '<----- state.favorites in DID UPDATE')
    }


    handleSubmit(e) {
        e.preventDefault();
        const category = this.state.optionCategory[Math.floor(Math.random() * this.state.optionCategory.length)];
        const description = this.state.optionDescription[Math.floor(Math.random() * this.state.optionDescription.length)];
        const categories = category + ',' + description
        const location = e.target.location.value;
        if (location === "Select one...") {
            return;
        }
        console.log(location, 'location')
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
                <h1 className="title">Lazy Date</h1>
                <CategoriesContainer handleSubmit={this.handleSubmit} optionLocation={this.state.optionLocation} optionDescription={this.state.optionDescription} dateType={this.state.dateType} />
                <ResultsContainer id="results" addToFavs={this.addToFavs} results={this.state.results} />
            </div>
        )
    }
}

export default App;