import React, { useState } from 'react';
import { axiosWithAuth } from './AxiosWithAuth';


// Step 1: Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like)

// The login function should save the returned token to localStorage. 

// When the request returns, save the token to localStorage, then use the history object in your Login component to navigate your user to your FriendsList route

function Login(props) {
    const [credentials, setCredentials] = useState({});

    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth().post(`http://localhost:5000/api/login`, credentials)
            .then(response => {
                console.log(response)
                localStorage.setItem("token", response.data.payload)
            })
            .catch(err => console.log(err))
    }

    const handleChanges = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div>
            <form>
                <input placeholder={'username'} name='username' type='text' value={credentials.username} onChange={handleChanges} />
                <input placeholder={'password'} name='password' type='password' value={credentials.password} onChange={handleChanges} />
                <button onClick={handleLogin} type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;