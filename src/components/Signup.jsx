import React, {useState} from 'react'
import axios from 'axios';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        if(name && email && password) {
        var axios = require('axios');
        var data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "role": "U"
        });

        var config = {
        method: 'post',
        url: 'http://localhost:4000/users/signup',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log(response.data);
        if(response.data && response.data.data && response.data.data.name) {
            setName('')
            setEmail('')
            setPassword('')
        }
           setMessage(response.data.message)
        })
        .catch(function (error) {
        console.log(error);
        });

        }else {
            setMessage('No field should be empty.')

        }
    }
    console.log(name, email, password, "in signup");
  return (
    <>
        
            <form >
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }}>Sign Up</button>
                <div>
                {message && <span>{message}</span>}
                </div>
            </form>
    </>
  )
}
