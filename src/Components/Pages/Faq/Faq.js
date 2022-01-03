import React from 'react';
import { Accordion } from 'react-bootstrap';
const Faq = () => {
    return (
        <div>
            <div className="mt-5 p-5">
                <h1 className="bg-danger text-white p-3"> Do You Have Questions About Our Service?
                </h1>
                <div className="row p-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className=" mt-5">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Where can I buy a product from??</Accordion.Header>
                                    <Accordion.Body>
                                        Across the world, we have stores in over 10 countries. They are well equipped to provide you support and guidance to ride a motorcycle of your choice. All you need to do is walk in to a store near you.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Is there a customer service number that I can call for any assistance?</Accordion.Header>
                                    <Accordion.Body>
                                        You can reach out to Support at 1800 210 0007. (9am to 9pm)
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How much support?</Accordion.Header>
                                    <Accordion.Body>
                                        We try to only advertise products available on site at that time, however sometimes this isn’t always possible – if there is something you see advertised and it isn’t in stock yet please feel free to email us for more information! We’ll always try and help.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <img className="img-fluid" src='https://i.ibb.co/PYyj4Bq/14-500x-crop-center.png' alt="" style={{
                            // height: "450px"
                            // width: "450px"
                        }} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;