// import { getAllByText } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import BreakFast from '../BreakFast/BreakFast'
import Food from '../Food/Food';

const AllFood = () => {
    const [allFood, setAllFood] = useState([]);
    useEffect(()=>{
        fetch('./allfood.json')
        .then(res =>res.json())
        // .then(data => console.log(data))
        .then(data => setAllFood(data))
    },[]);
    console.log(allFood)
    return (
        <div>
            <Row xs={1} md={3} >
            {
                allFood.map(food=><Food
                key={food.id}
                food={food}
                ></Food>)
            }
            </Row>
        </div>
    );
};
export default AllFood;