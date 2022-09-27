import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from './Menu_Navbar'
export default class CreateMenu extends Component {

    constructor(props) {
        super(props)
        // Setting up functions
        this.onChangeMenuName = this.onChangeMenuName.bind(this);
        this.onChangeMenuPrice = this.onChangeMenuPrice.bind(this);
        this.onChangeMenuDesc = this.onChangeMenuDesc.bind(this);
        this.onChangeMenuImage = this.onChangeMenuImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // Setting up state
        this.state = {
          name: '',
          price: '',
          desc: '',
          image:'',
          role:'',
          loggedIn: false
        }
      }
      componentDidMount() {
        let getLoggedIn = sessionStorage.getItem('loggedIn')
        if(getLoggedIn) {
          let role = sessionStorage.getItem('role');
          this.setState({
            loggedIn: getLoggedIn,
              role: role
          });
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
      onChangeMenuImage(e) {
        this.setState({ image: e.target.value})
      }
      onSubmit(e) {
        e.preventDefault()
        const menuObject = {
          name: this.state.name,
          price: this.state.price,
          desc: this.state.desc,
          image: this.state.image
        };
        axios.post('http://localhost:4000/menuItems/create-menu', menuObject)
          .then(res => console.log(res.data));
        this.setState({ name: '', price: '', desc: '',image: '' })
        //alert("Menu created successfully");
      }
  render() {
    let {loggedIn, role} = this.state
    return (<>{loggedIn && <div><Navbar role={role} /><div class="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeMenuName}/>
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.price} onChange={this.onChangeMenuPrice}/>
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.desc} onChange={this.onChangeMenuDesc}/>
        </Form.Group>
        <Form.Group controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={this.state.image} onChange={this.onChangeMenuImage}/>
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Menu
        </Button>
      </Form>
    </div></div>}</>);
  }
}