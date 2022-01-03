import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';
import { Button, CardContent, Grid, Typography } from '@mui/material';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { red, orange, grey } from '@mui/material/colors';



const Slider = () => {
    return (
        <div className='home_slider'>
            <Carousel>
                <Carousel.Item className='bg-gray'>
                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/2_2048x.png?v=1563163275"
                        alt="Third slide"
                    />
                    <CardContent className='cardContent' style={{ backgroundColor: "rgb(206 153 153)" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <ContactPhoneIcon sx={{ fontSize: "60px", color: orange[400] }} />
                                <div>
                                    <Button className='px-5 text-white mainBtn mt-2' style={{
                                        borderRadius: "5% 15%"
                                    }}>CONTRACT US</Button>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Typography gutterBottom variant="h5">
                                    Energy Saving
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Reserve feature helps Drone use more than 10 hours
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Carousel.Item>
                <Carousel.Item className='bg-gray'>

                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/3_2048x.png?v=1563163285"
                        alt="Second slide"
                    />
                    <CardContent className='cardContent' style={{ backgroundColor: "rgb(206 153 153)" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <ContactPhoneIcon color="primary" sx={{ fontSize: "60px", color: grey[800] }} />
                                <div>
                                    <Button className='mainBtn px-5 text-white mt-2' style={{
                                        borderRadius: "5% 15%"
                                    }}>CONTRACT US</Button>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Typography gutterBottom variant="h5">
                                    Discount
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    10% Discount !!! Hurry Up
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Carousel.Item>

                <Carousel.Item className='bg-gray'>
                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/1_2048x.png?v=1563163263"
                        alt="Third slide"
                    />
                    <CardContent className='cardContent' style={{ backgroundColor: "rgb(206 153 153)" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <ContactPhoneIcon sx={{ fontSize: "60px", color: red[500] }} />
                                <div>
                                    <Button className='mainBtn px-5 text-white mt-2' style={{
                                        borderRadius: "5% 15%"
                                    }}>CONTRACT US</Button>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Typography gutterBottom variant="h5">
                                    HD 4K Video
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Get the drone with a spectacular 4k camera.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>

                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Slider;