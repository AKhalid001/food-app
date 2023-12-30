import React from 'react'
import { useParams } from 'react-router-dom';


export const Order = () => {
    const { id } = useParams();
    
    // const [food, setFood] = useState(null);

    return (
        <div>
            <h2>Order</h2>
            <div className="card-body">
                {/* <h5 className="card-title">{id} {name}</h5>
                <p className="card-text">The ingredients are : {ingredients}</p>
                <p className="card-text">Its a {type} {category} dish</p>
                <p className="card-text">Rating: {rating}</p>
                <p className="card-text">Price: {price}</p>
                <p className="card-text">Order</p> */}
            </div>
        </div>
    )
}
