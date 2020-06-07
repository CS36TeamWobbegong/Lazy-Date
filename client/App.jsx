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
            optionLocation:[
                {city: "Santa Monica", zipcode: 90401},
                {city: "West Hollywood", zipcode: 90069},
                {city: "Studio City", zipcode: 91604},
                {city: "DTLA", zipcode: 90017}
            ]
        }

    }
    

    render() {
        return (
            <div>
                <h1 className="title">Better Together</h1>
                <CategoriesContainer/>
                <ResultsContainer results={this.state.results} />
            </div>
        )
    }    
}

export default App;