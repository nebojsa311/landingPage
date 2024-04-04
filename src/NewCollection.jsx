import React from 'react';
import './NewCollection.css'
import red from './assets/red.png'
import blue from './assets/blue.png'
import black from './assets/black.png'

function NewCollection() {
    return (
        <div className='newCollection'>
            <div className='leftBlock'>
                <p>Our Summer Collection</p>
                <h1>NewCollection</h1>
                <h1 className='purpleHeading'>Converse</h1>
                <p>Discover stylish Converse arrivals, quality comfort, and innovation for your active life<br/></p>
                </div>
            <div className="rightBlock">
                <img src={red}/>
                <img src={blue}/>
                <img src={black}/>
            </div>
        </div>
    )
}

export default NewCollection;