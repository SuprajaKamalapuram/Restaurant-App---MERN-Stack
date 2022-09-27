import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from './Menu_Navbar'
export default class EditMenu extends Component {
  constructor(props) {
    super(props)
    this.onChangeMenuName = this.onChangeMenuName.bind(this);
        this.onChangeMenuPrice = this.onChangeMenuPrice.bind(this);
        this.onChangeMenuDesc = this.onChangeMenuDesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: '',
      price: '',
      desc: '',
      role:'',
      loggedIn: false
    }
  }
  componentDidMount() {
    let getLoggedIn = sessionStorage.getItem('loggedIn')
    if(getLoggedIn) {
      let role = sessionStorage.getItem('role');
      axios.get('http://localhost:4000/menuItems/edit-menu/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          price: res.data.price,
          desc: res.data.desc,
          loggedIn: getLoggedIn,
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
  onChangeMenuName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeMenuPrice(e) {
    this.setState({ price: e.target.value })
  }
  onChangeMenuDesc(e) {
    this.setState({ desc: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const menuObject = {
      name: this.state.name,
      price: this.state.price,
      rollno: this.state.desc
    };
    axios.put('http://localhost:4000/menuItems/update-menu/' + this.props.match.params.id, menuObject)
      .then((res) => {
        console.log(res.data)
        console.log('Menu successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Menu List 
    this.props.history.push('/menu-list')
  }

  render() {
    let {loggedIn, role} = this.state
    return (<>{loggedIn && <div><Navbar role={role} /><div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeMenuName} />
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangeMenuPrice} />
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.desc} onChange={this.onChangeMenuDesc} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Menu
        </Button>
      </Form>
    </div></div>}</>);
  }
}