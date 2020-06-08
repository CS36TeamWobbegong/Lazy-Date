import React, { Component } from 'react';

class CategoriesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const categories = ['concert', 'sports', 'hike', 'beach', 'skydive'];
        //optionDescription is from state
        const optionDescription = this.props.optionDescription
        const descriptionArray = [];
        for (let i = 0; i < optionDescription.length; i++) {
            descriptionArray.push(
            <label key={i}>
                <input type="radio" name="optionDescription" value={optionDescription[i]} id={optionDescription[i]} key={i} />
                {optionDescription[i]}
                <br></br>
            </label>
            );
        }
        //this.props.optionLocation
        const optionLocation = this.props.optionLocation;
        const locationArray = [];
        for (let i = 0; i < optionLocation.length; i++) {
            locationArray.push(
                <option name="optionLocation" value={optionLocation[i].city} id={optionDescription[i].city} key={i}>{optionLocation[i].city}</option>
            )
        }

        return (
            <div className='box'>


                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        <h2>Categories</h2>
                        <p>Choose what type of date you want</p>
                    </label>
                    {descriptionArray}
                        <h2>Neighborhood</h2>
                        <p>Choose your neighborhood</p>
                    <select id="location" name="location">
                    <option>Select one...</option>
                    {locationArray}
                    </select>
                    <br></br>
                    <input type="submit" value="submit" className="submit-btn" />
                </form>
            </div>
        )
    }
}

export default CategoriesContainer;