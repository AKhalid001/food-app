import React, { useState } from 'react';
import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';




export const Cuisine = () => {

    let imgStyle = {
        margin: "5px",
        float: "center",
        width: "200",
        height: "70vh"
    }

   


    const [item, setItem] = useState(Menu)
    const Order = useNavigate()

    return (
        <div className="grid text-center ">
            <h1><i>Cuisines</i></h1>
            <hr />
            <div className="row row-cols-4 my-2 mx-2 ">
                {item.map((elem) => {

                    const { id, name, image, category, type, ingredients, price, rating } = elem;
                    return (

                        <div className="card my-2 mx-2 " style={{ width: "23vw" }} key={id}>

                            <div style={imgStyle}>
                                <img src={image} className="card-img-top my-2" alt="..." />
                            </div>

                            <div className="card-body">
                                <hr />
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">"{ingredients}"</p>
                                <p className="card-text">Rating: {rating}</p>
                                <p className="card-text">Price ($): {price}</p>
                                <button to="/Order" className="btn btn-primary" onClick={()=> {Order("/Order")}} >Order</button>
                                
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}


