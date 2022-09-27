import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MenuTableRow from './MenuTableRow';
import Navbar from './Menu_Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
export default class MenuList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
      role:'',
      loggedIn: false
    };
  }
  componentDidMount() {
    let getLoggedIn = sessionStorage.getItem('loggedIn')
    if(getLoggedIn) {
      let role = sessionStorage.getItem('role');
      axios.get('http://localhost:4000/menuItems/')
      .then(res => {
        this.setState({
          loggedIn: getLoggedIn,
            menuItems: res.data,
            role: role
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }else {
      this.props.history.push('/')
    }
   
  }
  DataTable() {
    return <div style={{textAlign:'center'}}><Row xs={1} md={2} lg={3} className="g-4">{this.state.menuItems.map((res, i) => {
      return <Col><MenuTableRow obj={res} key={i} role={this.state.role} /></Col>;
    })}</Row></div>
  }

  render() {
    let {loggedIn, role} = this.state
    return (<div >
     {loggedIn && <>
      <div>
        <Navbar role={role} />
      </div>
      <Container>
      
      {this.DataTable()}
      </Container>
      </>}
    </div>);
  }
}