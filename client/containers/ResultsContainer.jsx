import React, { Component } from 'react';
import Results from "../components/Results.jsx"

export class ResultsContainer extends Component {

  
    render() {
        const resultsInfo = this.props.results.map((box, i) => {
            return <Results key={i} results={box}/>
        });

        return (
            <div className='box'>
                <h1>Results</h1>
                {resultsInfo}
            </div>
        )
    }
}

export default ResultsContainer;