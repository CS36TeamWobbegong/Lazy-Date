import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer.jsx';
import ResultsContainer from './containers/ResultsContainer.jsx';

class App extends Component {
    constructor() {
        super()
        this.state = {
            selectedKeywords: ['outdoors', 'event']
        }
    }
    render() {
        return (
            <div>
                <h1 className="title">Better Together</h1>
                <CategoriesContainer/>
                <ResultsContainer/>
            </div>
        )
    }    
}
export default App;