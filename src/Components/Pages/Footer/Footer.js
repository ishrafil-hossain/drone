import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer-main text-start p-5 mt-5">
            <div className="row">
                <div className="col-lg-3 col-md-3  col-12 my-5 text-center text-white">
                    <h5>CONTACT US</h5>
                    <br />
                    {/* <p><FontAwesomeIcon icon={faPhone} /> PHONE: <small>+880189999929</small></p> */}
                    <p><i className="fas fa-envelope"></i> Email: <small className="small">squaDrone@yahoo.com</small> </p>
                </div>
                <div className="col-lg-6 col-md-6 col-12 my-5 text-center text-white">
                    <h5>SOCIAL</h5>
                    <i className="fab fa-facebook fa-2x p-3"></i>
                    <i className="fab fa-facebook-messenger fa-2x p-2"></i>
                    <i className="fab fa-google-plus fa-2x p-2"></i>
                    <i className="fab fa-skype fa-2x p-2"></i>
                    <i className="fab fa-twitter fa-2x p-2"></i>
                    <i className="fab fa-linkedin fa-2x p-2"></i>

                </div>
                <div className="col-lg-3 col-md-3 col-12 mt-5">
                    <h4>Do You Need Help With
                        Anything?</h4>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email Address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="" id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <p className="text-center text-white mt-4">© Copyright © SquaDrone. All rights reserved.</p>
        </div >

    );
};

export default Footer;