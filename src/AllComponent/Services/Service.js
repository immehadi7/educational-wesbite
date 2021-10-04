import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
        <div>
             <h1>Here all our course</h1>
            <div className='service-show' >
                {
                    allServices.map(services => <AllService 
                        services={services}
                        key={services.id}
                        ></AllService> )
                }
            </div>
        </div>
    );
};

export default Service;