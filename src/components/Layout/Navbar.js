import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <div className="container-fluid">
            <u><b><h3>Covid-19 Bed Booking</h3></b></u>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Patient List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                    </li>
                   
                </ul>

            </div>
        </div>
        <Link className="btn btn-outline-dark " to ="/users/add">New Booking</Link>
        </div>
    </nav>
    )
}
export default Navbar;