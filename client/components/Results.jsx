import React, { Component } from 'react';

export class Results extends Component {
    
    render() {  
        return (
            <div className='resultBox'>
            <img src="" alt="Image Here"/>
                <ul>
                    <li>Name</li>
                    <li>Address</li>
                    <li>Price</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Results;