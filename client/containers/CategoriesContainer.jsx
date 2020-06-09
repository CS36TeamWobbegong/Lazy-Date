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

        // let displayDateType;
        // if (this.props.dateType) {
        //     displayDateType = this.props.dateType.split(",").join(" and ")
        // }

        return (
            <div className='box'>


                <form onSubmit={this.props.handleSubmit} className='form'>
                    <h1>Let's explore:</h1>
                    <select id="location" name="location" className='select'>
                        <option>Select one...</option>
                        {locationArray}
                    </select>
                    <h1>Looking for:</h1>
                    <button onClick={this.props.randomize} className='randomize-btn'>Anything EXCEPT dinner & drinks</button>
                </form>
            </div>
        )
    }
}

//<p>{displayDateType ? displayDateType : null}</p>
//<button onClick={this.props.randomize} >Anything EXCEPT dinner & drinks</button>

export default CategoriesContainer;