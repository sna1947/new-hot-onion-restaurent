import React from 'react';
import { Card } from 'react-bootstrap';
import './BreakFast.css'

const BreakFast = (props) => {
    console.log(props.breakfast)

    const {id, img, name, price, about} =props.breakfast;
    return (   
        <div >
            <div className='break-fast'>
            <Card.Body >
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    <img className='card-img' src={img} alt="" />
                    <h3>{id}</h3>
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <h6>{about}</h6>
                </Card.Text>
            </Card.Body>
            </div>
            
        </div>
    );
};
export default BreakFast;