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
                      <li>
                          <a href={result.url} className='link'>MORE INFO HERE</a>
                      </li>
                  </ul>
                  <button id={this.props.id} onClick={this.props.addToFavs} className='fav-btn'>Add To Favorites</button>
                </div>
            </div>
        )
    }
}

export default Results;