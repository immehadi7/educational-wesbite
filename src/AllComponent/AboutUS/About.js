import React from 'react';
import { Button } from 'react-bootstrap';
import './about.css';
import img from '../../allImage/myselfpic.jpg' ;
import img2 from "../../allImage/FB_IMG_1640797398394.jpg";
import img3 from "../../allImage/IMG_20211221_144757.jpg";
import img4 from "../../allImage/received_269831325135194.jpeg";

const About = () => {
    return (
        <div className='about-page'>
            <div className='about-aside'> 
            <div>
            <h2>Our work</h2>
                <p>We are a platform for education. We think education doesn't <br /> need any bound. Our motives is to create a generation <br /> with skillful mind. We believe that  we will chase what are <br />we looking for. Let's help each other for grow. <br />
                Any information about any problem,<br />
                kindly message us:</p>
               <div className='form-style'>
               <form action="">
                    <input type="text" placeholder='Your email' /> <br />
                    <input type="text" placeholder="your message" /> <br />
                    <Button variant="outline-primary">Message us </Button>{' '}
                </form>
               </div>       
            </div>
            <div className='about-beside'>
                <h3>
                    Meet our team member
                </h3>
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>

            </div>
           
        </div>
    );
};

export default About;