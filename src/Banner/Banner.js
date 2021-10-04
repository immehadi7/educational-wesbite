
import React from 'react';
import { Carousel , Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import image1 from '.././allImage/faculty+banners-03.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const course = <FontAwesomeIcon icon={faUserGraduate} />
  
    return (
        <>
            <Carousel>
           
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
     <div  >
    <Carousel.Caption>
        <h1>See our Latest Course</h1>
        <NavLink to='/services'>   <Button variant="outline-dark"> {course} All Course</Button>{' '} </NavLink>
 

   </Carousel.Caption>
    </div>
    
 
  
   
    
  </Carousel.Item>
 
    
</Carousel>
            
        </>
    );
};

export default Banner;