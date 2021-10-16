import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = (props) => {
    const {id, img, name, price, about} =props.food;
    const url = `/food/${id}`;
    return (
        <div className='break-fast'>
            <Card.Body >
                {/* <Card.Title>Card title</Card.Title> */}
                <Card.Text>
                    <img className='card-img' src={img} alt="" />
                    <h3>{id}</h3>
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <h6>{about}</h6>
                </Card.Text>
               {/* <Link to={`/food/${id}`}></Link> */}
               <Link to={url}>visit me</Link>
            </Card.Body>
        </div>
    );
};

export default Food;