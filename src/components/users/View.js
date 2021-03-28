import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        level: "",
        pin: "",
        hospital: "",
        time: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container py-4">
            <Link className="btn btn-warning btn-outline-dark mr-2" to="/">
                Back to Home
        </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Patient Name: {user.name}</li>
                <li className="list-group-item">Critcal Level: {user.level}</li>
                <li className="list-group-item">Pin-Code: {user.pin}</li>
                <li className="list-group-item">Hospital Name: {user.hospital}</li>
                <li className="list-group-item">Time-Slot: {user.time}</li>

            </ul>
        </div>
    );

};

export default User;