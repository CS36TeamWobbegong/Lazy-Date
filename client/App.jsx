import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer.jsx';
import ResultsContainer from './containers/ResultsContainer.jsx';

import './styles.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //results from server
            results: [{
                "name": "Susan G. Komen's Culinary Showdown",
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8BjKwHTTd5Q762BWzJ09zg/o.jpg",
                "location": "1755 North Highland Ave, Loews Hotel Hollywood, Los Angeles, CA 90028",
                "contact": ""
            },
            {
                "name": "The Gourmandise School of Sweets and Savories",
                "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7thMeczV8El32hsu6GpIig/o.jpg",
                "location": "395 Santa Monica Pl, Ste 323, Santa Monica, CA 90401",
                "contact": "(310) 656-8800"
            },
            {
                "name": "Hipcooks West",
                "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/kWvlpG2Xb0n_5iWtVu-gag/o.jpg",
                "location": "2833 S Robertson Blvd, Los Angeles, CA 90034",
                "contact": "(310) 841-2738"
            },
            {
                "name": "L A Loves Alex's Lemonade",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/auRdxEhMXyKlcm0OqbK-Mw/o.jpg",
                "location": "Los Angeles, CA 90095",
                "contact": ""
            },
            {
                "name": "California Sushi Academy",
                "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qjrj1jJS3ygxLr6waRR84w/o.jpg",
                "location": "11310 Nebraska Ave, Ste 1, Los Angeles, CA 90025",
                "contact": "(310) 231-4499"
            }],
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