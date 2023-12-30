import React from 'react'
import { Link } from 'react-router-dom'


export const Signup = () => {
    let SignupStyle= {
        width: "60%",
        height: "95vh",
        border: "3px solid black",
        background: "#e6e6e6",
    }

    return (
        <div className='container my-3'style={SignupStyle}>
            <h2 align="center" >Sign Up Page</h2>
            <hr />
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputFName" className="form-label">First name</label>
                    <input type="text" className="form-control" id="inputFName" />
                </div>
                <div className="col-md-6">  
                    <label for="inputLName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="inputLName" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="example@gmail.com" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Lane No." />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">

                        <option selected>Choose...</option>
                        <option> Andhra Pradesh </option>
                        <option> Arunachal Pradesh </option>
                        <option> Assam </option>
                        <option> Bihar </option>
                        <option> Chhattisgarh </option>
                        <option> Goa </option>
                        <option> Gujarat </option>
                        <option> Haryana </option>
                        <option> Himachal Pradesh </option>
                        <option> Jharkhand </option>
                        <option> Karnataka </option>
                        <option> Kerala</option>
                        <option> Madhya Pradesh</option>
                        <option> Maharashtra</option>
                        <option> Manipur </option>
                        <option> Meghalaya </option>
                        <option> Mizoram </option>
                        <option> Nagaland </option>
                        <option> Odisha </option>
                        <option> Punjab </option>
                        <option> Rajasthan </option>
                        <option> Sikkim </option>
                        <option> Tamil Nadu </option>
                        <option> Telangana </option>
                        <option> Tripura</option>
                        <option> Uttar Pradesh</option>
                        <option> Uttarakhand</option>
                        <option> West Bengal</option>

                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12 mx-2 my-2">
                    <Link to="/Cuisine"><button type="submit" className="btn  btn-primary" >Sign up</button></Link>
                </div>
            </form>
        </div>
    )
}
