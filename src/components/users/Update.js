import axios from "axios";
import React, { useState , useEffect} from "react";
import {useHistory ,useParams} from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        level: "",
        pin: "",
        hospital: "",
        time: ""
    });

    const {name, username, email, phone, website }=user
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(() => {
        loadUser()
    }, []);
    const onSubmit = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/")
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };
    return (

        <div className="container">
            <div className="w-50 mx-auto shadow p-4">
                <h3 className="text-center mb-4"><b><u>Update the Patient details</u></b></h3>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Enter the Patient name" name="name" value={name} 
                        onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="w-50 ">
                <h6 className="text-center mb-4"><b>Select the critical level</b></h6>
                </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input mb-4" type="radio" name="level" value="High"
                            onChange={e => onInputChange(e)} />
                        <label className="form-check-label mb-4" for="inlineRadio1">High</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="level" id="inlineRadio2" value="Low"
                            onChange={e => onInputChange(e)} />
                        <label className="form-check-label" for="inlineRadio2">Low</label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Enter Patient Pin-Code" name="pin" value={email}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Enter Hospital Name" name="hospital" value={phone} 
                        onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><b>Time Slot</b></span>
                        <input placeholder="HH:MM"type="text" className="form-control" name="time" aria-label="Dollar amount (with dot and two decimal places)"
                            onChange={e => onInputChange(e)} />
                    </div>
                    <button className="btn btn-warning btn-block">Update</button>
                </form>
            </div>
        </div>

    );
};
export default EditUser;