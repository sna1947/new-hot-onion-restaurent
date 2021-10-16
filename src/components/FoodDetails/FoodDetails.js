import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FoodDetails = () => {
    const {foodId} = useParams();
    // console.log(foodId);
    const [food, setFood] = useState([]);
    useEffect(()=>{
        const url = `/food/${foodId}`;
        fetch('url')
        .then(res=>res.json())
        .then(data=>console.log(data));
        // .then(data=>setFood(data));

    },[])

    return (
        <div>
            <h1>see your food:{foodId}</h1>
            {/* <img className='card-img' src={img} alt="" />
                    <h3>{id}</h3>
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <h6>{about}</h6> */}
        </div>
    );
};

export default FoodDetails;