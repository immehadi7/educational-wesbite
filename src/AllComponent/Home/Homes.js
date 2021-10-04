import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../../Banner/Banner';
import Package from '../Package/Package';
import './home.css'

const Homes = () => {
    const [homeCourses , setHomeCourse] = useState([])
    useEffect(()=>{
        let url =  `https://immehadi7.github.io/jsonapi/packageJsonapi.json` ;
            fetch(url)
                .then(res=>res.json())
                    .then(data=> setHomeCourse(data))

    } ,[])

    return (
        <div>
            <Banner></Banner>

            <div className='learnHomeStyle'>
                <h1>Learn our course</h1>
            <Row xs={1} md={3} className="g-4">
            {
                    homeCourses.map(homeCourse => <Package
                        key={homeCourse.id}
                        homeCourse={homeCourse} 
                    ></Package> )
                }
            </Row>
            </div>
          
            

            
           
        </div>
    );
};

export default Homes;

