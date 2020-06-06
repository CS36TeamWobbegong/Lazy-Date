import React, { Component } from 'react';
import Results from "../components/Results.jsx"

export class ResultsContainer extends Component {
    
    render() {
        return (
            <div className='box'>
                <h1>Results</h1>
                <Results/>
            </div>
        )
    }
}

export default ResultsContainer;