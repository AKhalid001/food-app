import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">🏠</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Cuisine">Cuisines</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Veg">Veg</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sides
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Dessert">Dessert</Link></li>
                                    <li><Link className="dropdown-item" to="/Drinks">Drinks</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


