import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import CreateMenu from './components/create-menu.component'
import EditMenu from './components/edit-menu.component'
import MenuList from './components/menu-list.component'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes />
    </Router>
    </div>
  )
}
export default App