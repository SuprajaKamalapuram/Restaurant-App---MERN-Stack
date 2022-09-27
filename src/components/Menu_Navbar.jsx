import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Link } from 'react-router-dom'

export default function Menu(props) {

  return (
    <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/menu'} className="nav-link">
                  Restaurant App
                </Link>
              </Navbar.Brand>
           <Nav className="justify-content-end">
           {props.role == 'A' &&  <Nav>
                  <Link to={'/create-menu'} className="nav-link">
                    Create Menu
                  </Link>
                </Nav>}
                <Nav>
                  <Link to={'/menu-list'} className="nav-link">
                    Menu List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
    </div>
  )
}
