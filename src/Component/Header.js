import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Drinks } from './Drinks'

export const Header = () => {
    const Home = useNavigate()
    const About = useNavigate()
    const Cuisines = useNavigate()
    const Veg = useNavigate()
    const Dessert = useNavigate()
    const Drinks = useNavigate()
    const Login = useNavigate()
    const Signup = useNavigate()
   
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-brand" onClick={()=> {Home('/')}}>🏠</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={()=> {About("/About")}}>About</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={()=> {Cuisines("/Cuisine")}}>Cuisines</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={()=> {Veg("/Veg")}}>Veg</button>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sides
                                </div>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={()=> {Dessert("/Dessert")}}>Dessert</button></li>
                                    <li><button className="dropdown-item" onClick={()=> {Drinks("/Drinks")}}>Drinks</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" onClick={()=> {Login("/Login")}}>Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" onClick={()=> {Signup("/Signup")}}>Signup</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


