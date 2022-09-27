import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
export default class MenuTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteMenu = this.deleteMenu.bind(this);
    }
    deleteMenu() {
        axios.delete('http://localhost:4000/menuItems/delete-menu/' + this.props.obj._id)
            .then((res) => {
                console.log('Menu successfully deleted!')
                window.location.reload()
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        console.log(this.props.obj, "in menuTable row")
        return (
        
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={this.props.obj.image} height="250px" />
{/* <Image src={this.props.obj.image} fluid={true} /> */}
<Card.Body>
  <Card.Title>{this.props.obj.name}</Card.Title>
  <Card.Text>
    <h6>{this.props.obj.price}</h6>
    <p>{this.props.obj.desc}</p>
  
  </Card.Text>
 
  {this.props.role == 'A' ? <><Link className="edit-link" to={"/edit-menu/" + this.props.obj._id}>
                        Edit
                    </Link> 
                    <Button className="delete-button" onClick={this.deleteMenu} size="sm" variant="danger">Delete</Button> </>:  <Button variant="primary">Order</Button>}
</Card.Body>
</Card>   
        );
    }
}