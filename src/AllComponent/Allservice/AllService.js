import React from 'react';
import './allservice.css';

const AllService = (props) => {
    let {id, title, price , description} = props.services
        console.log(props.services)
    return (
        <div className='all-servicesStyle' >
            <h1>{id}</h1>
        </div>
    );
};

export default AllService;