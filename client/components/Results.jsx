import React, { Component } from 'react';

export class Results extends Component {

    
    render() {  
        const result = this.props.results;
        
        return (
            <div className='resultBox'>
              <figure className='resultImage'>
                <img src={result.image_url} alt="Image failed to load"/>
              </figure>
              <div>
              <h3 className='resultName'>{result.name}</h3>
                  <ul>
                      <li>Address: {result.location}</li>
                      <li>Phone: {result.contact ? result.contact : 'Not Available'}</li>
                  </ul>
                </div>
            </div>
        )
    }
}

export default Results;