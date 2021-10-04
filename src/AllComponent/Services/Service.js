import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import AllService from '../Allservice/AllService';
import './service.css';

const Service = () => {
    let [allServices , setAllServices] = useState([])
        useEffect(()=>{
            let url = `https://immehadi7.github.io/jsonapi/servicesJsonApi.json`;
                fetch(url)
                    .then(res=>res.json())
                        .then(data => setAllServices(data) )
        },[])
    return (
        <div className='service-part'>
             <h1>Choose your favorite Course: {allServices.length} available </h1>
            <div className='' >
            <Row xs={1} md={3} className="g-4" style={{marginLeft:"40px"}}> 
            {
                    allServices.map(services => <AllService 
                        services={services}
                        key={services.id}
                        ></AllService> )
                }
              </Row>
              
            </div>
        </div>
    );
};

export default Service;