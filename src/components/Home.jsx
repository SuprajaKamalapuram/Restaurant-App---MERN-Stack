import React, {useState} from 'react'
import './Home.css'
import Login from './Login'
import Signup from './Signup'


export default function Home(props) {
    const [panelActive, setPanelActive] = useState(false)
    console.log(props, "props in home");
  return (
    <div className='home_body'>
 <div class={`container ${panelActive ? 'right-panel-active' : ''}`} id="container">
        <div class="form-container sign-up-container">
        <Signup />
        </div>
        <div  class="form-container log-in-container">
            <Login props={props}/>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Already have an account? Log In</p>
                    <button class="ghost" id="logIn" onClick={() => setPanelActive(!panelActive)}>Log In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, There!</h1>
                    <p>Don't have an account? Sign Up Free</p>
                    <button class="ghost" id="signUp" onClick={() => setPanelActive(!panelActive)}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
   
  )
}
