import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

const Package = (props) => {
    let {id, title , description , price , image} = props.homeCourse
        console.log(props.homeCourse)

    return (
        <div> 
           
            <Col>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title> {title} </Card.Title>
      <h3>Price: {price} </h3>
      <Card.Text>
       {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  
</Col>    





        </div>
    );
};

export default Package;