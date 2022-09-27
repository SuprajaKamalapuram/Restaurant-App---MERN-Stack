import React, {useState, useEffect} from 'react'
import { Nav } from 'react-bootstrap';
import Navbar from './Menu_Navbar'

export default function Menu(props) {
       const [loggedIn, setLoggedIn] = useState(false);
       const [role, setRole] = useState('');
        useEffect(() => {
              let getLoggedIn = sessionStorage.getItem('loggedIn')
              if(getLoggedIn) {
                setLoggedIn(getLoggedIn)
                let role = sessionStorage.getItem('role');
                setRole(role);
              }else {
                props.history.push('/')
              }
             
        }, [])
  return (
    <div>
        {loggedIn && <div className="menuBgImage" style={{backgroundImage: `url(/banner.jpg)`, backgroundSize:'cover', height:'665px', width:'100%'}}>
            <Navbar role={role} />
            <div>
{/* <img src='/banner.jpg' style={{maxWidth:'100%', maxHeight:'50%', overflow:'hidden'}} /> */}
            </div>
            </div>}
        
    </div>
  )
}
