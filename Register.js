import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom";
function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()//calling contructor
    console.log(username, "username");
    console.log(password, "password");

    function handleUsername(e) {
        // console.log(username)
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        // console.log(password)
        setPassword(e.target.value)
    }

    const handleSubmit = async () =>{ 
        const response = await fetch("http://localhost:5000/api/auth/register",{
            method : "POST",
            headers:{"Content-Type" : "application/json"}, //object
            body :JSON.stringify({username,password})
        })

        const data = await response.json();

        setPassword('')
        setUsername('')

        console.log(data,"handlesubmit")
    }


    console.log(password, username)

    return (
        <div className="d-flex flex-column align-items-center">

            <h1>
                this is Register page
            </h1>

            <input
                type="text"
                className="mt-1"
                placeholder="enter username"
                value={username}
                onChange={(e) => handleUsername(e)}
            />

            <input
                type="text"
                className="mt-3"
                placeholder="enter password"
                value={password}
                onChange={(e) => handlePassword(e)}
            />

            <button className="btn btn-primary" onClick={() => handleSubmit()}>
                submit
            </button>
            <Link to='/'>go to login page</Link>

        </div >
    )

}

export default Register;