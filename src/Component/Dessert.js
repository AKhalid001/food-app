import React, { useState } from 'react';
import { Menu } from './Menu';
import { Link } from 'react-router-dom';




export const Dessert = () => {

    let imgStyle = {
        margin: "5px",
        float: "center",
        width: "200",
        height: "65vh"
    }

   


    const [item, setItem] = useState(Menu)
    const [dt , setdt ] = useState("Dessert")
    const newMenu = item.filter(item => item.category === dt)

    return (
        <div className="grid text-center ">
            <h1><i>Desserts</i>🍨</h1>
            <hr />
            <div className="row row-cols-4 my-2 mx-2 ">
                {newMenu.map((elem) => {

                    const { id, name, image, category, type, ingredients, price, rating } = elem;
                    return (

                        <div className="card my-2 mx-2 " style={{ width: "23vw" }} key={id}>

                            <div style={imgStyle}>
                                <img src={image} className="card-img-top my-2" alt="..." />
                            </div>

                            <div className="card-body">
                                <hr/>
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text"> "{ingredients}"</p>
                                <p className="card-text">Rating: {rating}</p>
                                <p className="card-text">Price ($): {price}</p>
                                <Link to="/Order" className="btn btn-primary" >Order</Link>
                                
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


