import React, { Component } from 'react';

class CategoriesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const categories = ['concert', 'sports', 'hike', 'beach', 'skydive'];
        //optionDescription is from state

        // const optionDescription = this.props.optionDescription
        // const descriptionArray = [];
        // for (let i = 0; i < optionDescription.length; i++) {
        //     descriptionArray.push(
        //     <label key={i}>
        //         <input type="radio" name="optionDescription" value={optionDescription[i]} id={optionDescription[i]} key={i} />
        //         {optionDescription[i]}
        //         <br></br>
        //     </label>
        //     );
        // }




        //this.props.optionLocation
        const optionLocation = this.props.optionLocation;
        const locationArray = [];
        for (let i = 0; i < optionLocation.length; i++) {
            locationArray.push(
                <option name="optionLocation" value={optionLocation[i].zipcode} id={optionLocation[i].city} key={i}>{optionLocation[i].city}</option>
            )
        }

        let displayDateType;
        if (this.props.dateType) {
            displayDateType = this.props.dateType.split(",").join(" and ")
        }

        return (
            <div className='box'>


                <form onSubmit={this.props.handleSubmit}>
                    <h2>Let's explore:</h2>
                    <select id="location" name="location" >
                        <option>Select one...</option>
                        {locationArray}
                    </select>
                    <h2>Looking for:</h2>
                    <button onClick={this.props.randomize} >Anything EXCEPT dinner & drinks</button>
                </form>
            </div>
        )
    }
}

//<p>{displayDateType ? displayDateType : null}</p>
//<button onClick={this.props.randomize} >Anything EXCEPT dinner & drinks</button>

export default CategoriesContainer;