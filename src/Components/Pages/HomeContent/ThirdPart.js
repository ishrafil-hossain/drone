import { CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './ThirdPart.css'
import { Carousel } from 'react-bootstrap';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BoltIcon from '@mui/icons-material/Bolt';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

const ThirdPart = () => {

    return (
        <div className='mt-5' style={{ backgroundColor: "", height: "100vh" }}>
            <Typography variant='h2' className='m-5'>
                Our Services
            </Typography>
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <div className=''>
                            <div>
                                <img className='img-fluid animate__animated animate__slideInLeft animate__slower	3s animate__infinite infinite' src="https://i.ibb.co/931vyXn/11-850x.png" alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Carousel>
                            <Carousel.Item className='bg-gray p-3'>
                                <CardContent className='cardContent' style={{ backgroundColor: "#f3f3f3" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <CameraAltIcon sx={{ fontSize: "80px" }} />
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
                                <CardContent className='mt-5 cardContent' style={{ backgroundColor: "#f3f3f3" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <SportsEsportsIcon sx={{ fontSize: "80px" }} />
                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            <Typography gutterBottom variant="h5">
                                                Easy To Control
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Superior remote control system up to 1 km.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardContent className='mt-5 cardContent' style={{ backgroundColor: "#f3f3f3" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <AirplanemodeActiveIcon sx={{ fontSize: "80px" }} />
                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            <Typography gutterBottom variant="h5">
                                                Balance when Flying
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Superior remote control system up to 1 km.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>


                            </Carousel.Item>
                            <Carousel.Item className='bg-gray p-3'>
                                <CardContent className=' cardContent' style={{ backgroundColor: "rgb(206 153 153)" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <LocalGasStationIcon sx={{ fontSize: "80px" }} />
                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            <Typography gutterBottom variant="h5">
                                                Urge Emergency Gas
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                90% of the failures after collisions come from engines, gears, ...
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardContent className='mt-5 cardContent' style={{ backgroundColor: "rgb(206 153 153)" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <BoltIcon sx={{ fontSize: "80px" }} />
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
                                <CardContent className='mt-5 cardContent' style={{ backgroundColor: "#f3f3f3" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <AssistantDirectionIcon sx={{ fontSize: "80px" }} />
                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            <Typography gutterBottom variant="h5">
                                                Gas Navigation
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Avoid obstacles and go straight to the wave direction of control.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>


                            </Carousel.Item>
                            <Carousel.Item className='bg-gray p-3'>
                                <CardContent className='cardContent'>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <CameraAltIcon sx={{ fontSize: "80px" }} />
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
                                <CardContent className='mt-5 cardContent' style={{ backgroundColor: "#f3f3f3" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <SportsEsportsIcon sx={{ fontSize: "80px" }} />
                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            <Typography gutterBottom variant="h5">
                                                Easy To Control
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Superior remote control system up to 1 km.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardContent className='mt-5 cardContent' style={{ backgroundColor: "#f3f3f3" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <AirplanemodeActiveIcon sx={{ fontSize: "80px" }} />
                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            <Typography gutterBottom variant="h5">
                                                Balance when Flying
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Superior remote control system up to 1 km.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>


                            </Carousel.Item>
                        </Carousel>
                    </Grid>
                </Grid >
            </Container >
        </div >
    );
};

export default ThirdPart;