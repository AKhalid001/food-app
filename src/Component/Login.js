import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    let loginStyle = {
        width: "50%",
        height: "77vh",
        border: "3px solid black",
        background: "#e6e6e6",
    }
    const Cuisine = useNavigate()

    return (

        <div className='container my-3' style={loginStyle}>
            <h2 align="center" >Login Page</h2>
            <hr />
            <form className='container my-5'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label"><b>Password</b></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button className="btn btn-primary" onClick={()=> {Cuisine("/Cuisine")}} >Login</button>
            </form>
        </div>
    )
}


