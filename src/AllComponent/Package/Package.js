import React from 'react';
import { Card, Col , Button } from 'react-bootstrap';
import './package.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Package = (props) => {
    let {title , description , price , image} = props.homeCourse
        console.log(props.homeCourse)

        const element = <FontAwesomeIcon icon={faShoppingCart} />
        
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
    <Button variant="primary"> {element} Purchase now</Button>{' '}
  </Card>

  
</Col>    





        </div>
    );
};

export default Package;