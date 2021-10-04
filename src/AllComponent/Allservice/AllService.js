import React from 'react';
import { Card, Col , Button} from 'react-bootstrap';
import './allservice.css';

const AllService = (props) => {
    let {title, price , description , image} = props.services
        console.log(props.services)
    return (
        <div className='all-servicesStyle' >
 
    <Col>
      <Card style={{width:'20rem' ,background:'#ffffff'}} >
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Title> Price: {price} </Card.Title>
          <Card.Text>
           {description.slice(0,200)}
          </Card.Text>
        </Card.Body>
        <Card.Footer> <Button variant="outline-primary">Purchase now</Button> </Card.Footer>
      </Card>
    </Col>


        </div>
    );
};

export default AllService;