import { Grid, Typography, Container } from '@mui/material';
import React from 'react';

const SecondPart = () => {
    return (
        <div style={{ marginTop: "120px" }}>
            <div className='d-flex justify-content-center align-content-center'>
                <div>
                    <Container>
                        <Grid container spacing={20}>
                            <Grid item xs={12} md={6}>
                                <img className='img-fluid animate__animated animate__slideInLeft animate__slower	3s animate__infinite infinite' src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_01-640x384.png" alt="" />
                            </Grid>
                            <Grid item xs={12} md={6} className='text-start'>

                                <Typography variant='h5'>
                                    AERIAL PHOTOGRAPHY
                                </Typography>
                                <Typography variant='h2'>
                                    We Are Drone Pilots
                                </Typography>
                                <Typography variant='h6'>
                                    The most innovate feature is probably its advanced controls. Using simple hand gestures, you can take off, tell the drone to follow you and fly hi-quality drones.
                                </Typography>
                                <div className='d-flex justify-content-between mt-5'>
                                    <Typography variant='caption text'>
                                        AERIAL PHOTOGRAPHY
                                        A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment photography.
                                    </Typography>
                                    <Typography variant='caption text'>
                                        AERIAL PHOTOGRAPHY
                                        A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment photography.
                                    </Typography>
                                </div>

                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default SecondPart;