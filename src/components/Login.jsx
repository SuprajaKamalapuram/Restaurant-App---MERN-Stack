import { useState } from 'react';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const [message, setMessage] = useState('')
    const handleLoginDetails = () => {
        if(email && password) {
        var axios = require('axios');
        var data = JSON.stringify({
        "email": email,
        "password": password,
        });

        var config = {
        method: 'post',
        url: 'http://localhost:4000/users/login',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log(response);
        if(response.data && response.data.success) {
            setEmail('')
            setPassword('')
            sessionStorage.setItem('loggedIn', true)
            sessionStorage.setItem('role', response.data.data.role)
            props.props.history.push('/menu')
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
    console.log(email, password, "in login", props);
  return (
    <>
         <form >
                <h1>Log in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <a href="#">Forgot your password?</a>
                <button onClick={(e) => {
                     e.preventDefault();
                    handleLoginDetails()}}>Log In</button>
                     <div>
                {message && <span>{message}</span>}
                </div>
            </form>
    </>
  )
}
