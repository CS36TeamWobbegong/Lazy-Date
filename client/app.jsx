import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1 className="title">Better Together</h1>
                <categoriesContainer/>
                <resultsContainer/>
            </div>
        )
    }    
}
export default App;