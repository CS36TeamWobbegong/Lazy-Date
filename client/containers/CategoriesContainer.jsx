import React, {Component} from 'react';

class CategoriesContainer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const categories = ['concert', 'sports', 'hike', 'beach', 'skydive'];
        const keywords = [];
        for (let i = 0; i < categories.length; i++) {
            keywords.push(<button>{categories[i]}</button>);
        }
        return (
            <div>
                <h2>Categories</h2>
                <p>Choose what type of date you want</p>
                {keywords}
            </div>
        )
    }
}

export default CategoriesContainer;