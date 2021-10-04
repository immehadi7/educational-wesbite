import React from 'react';
import { Card, Col , Button } from 'react-bootstrap';
import './package.css';

const Package = (props) => {
    let {id, title , description , price , image} = props.homeCourse
        console.log(props.homeCourse)

    return (
        <div className='cardStyle'> 
           
            <Col>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title> {title} </Card.Title>
      <h3>Price: {price} </h3>
      <Card.Text>
       {description.slice(0,200)}
      </Card.Text>
    </Card.Body>
    <Button variant="primary">Purchase now</Button>{' '}
  </Card>

  
</Col>    





        </div>
    );
};

export default Package;