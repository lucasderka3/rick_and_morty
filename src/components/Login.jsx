import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <label>Password:</label>
            <input></input>
            <Link to='/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default Login;