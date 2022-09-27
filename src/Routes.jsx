import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import MenuList from './components/menu-list.component'
import CreateMenu from './components/create-menu.component'
import EditMenu from './components/edit-menu.component';
export default function Routes() {
  return (
    <div>
        <Switch>
            <Route
            exact 
            path="/"
            component={(props) => <Home {...props}/>}
            />
             {/* <Route
            exact 
            path="/login"
            component={(props) => <Login {...props}/>}
            />
             <Route
            exact 
            path="/signup"
            component={(props) => <Signup {...props}/>}
            /> */}
             <Route
            exact 
            path="/menu"
            component={(props) => <Menu {...props}/>}
            />
              <Route
            exact 
            path="/menu-list"
            component={(props) => <MenuList {...props}/>}
            />
               <Route
            exact 
            path="/create-menu"
            component={(props) => <CreateMenu {...props}/>}
            />
            <Route
            exact 
            path="/edit-menu/:id"
            component={(props) => <EditMenu {...props}/>}
            />
        </Switch>
    </div>
  )
}
