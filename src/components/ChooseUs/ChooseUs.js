import React from 'react';
import fastDelevery from '../../img/Image/fastDelevery.png'
import homeDelevery from '../../img/Image/homeDelevery.png'
import responder from '../../img/Image/responder.png'
import './ChooseUs.css'


const ChooseUs = () => {
    return (
        <div container>
            <div className='text'>
            <h1>Why You Choose Us</h1>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Repellat vero veritatis architecto reprehenderit numquam quaerat quasi! </p>
            </div>
            <div>
            <img className='choose-us' src={fastDelevery} alt="" />
            <img className='choose-us' src={homeDelevery} alt="" />
            <img className='choose-us' src={responder} alt="" />
            </div>
           
        </div>
    );
};

export default ChooseUs;