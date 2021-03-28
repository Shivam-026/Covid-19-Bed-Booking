import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();

    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Patient List</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Bed No.</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Patient Critical Level</th>
                            <th scope="col">Pin-Code</th>
                            <th scope="col">Hospital</th>
                            <th scope="col">Time Slot</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.level}</td>
                                    <td>{user.pin}</td>
                                    <td>{user.hospital}</td>
                                    <td>{user.time}</td>
                                    <td>
                                        <Link class="btn btn-primary mr-2" to = {`/users/${user.id}`}>view Detail</Link>
                                        <Link class="btn btn-outline-primary mr-2 my-2" to = {`/users/edit/${user.id}`}>Reschedule</Link><br></br>
                                        <Link class="btn btn-outline-danger mr-2" onClick={()=>deleteUser(user.id)}>Cancel</Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;