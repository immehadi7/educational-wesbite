import React from 'react';
import './footer.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <div >
 <footer>
       <div>
           <h2>This is a educational website</h2>
       </div>
       <div>
           <h5>All rights reserved to respected owners</h5>
       </div>
            <div>
                <h5>Contact us</h5>
                <h5> <small> {phone} : +2938472312</small> </h5>
                <h5> {email}: fastlearner@umail.com</h5>
                </div>        
        </footer>
        </div>
       
    );
};

export default Footer;