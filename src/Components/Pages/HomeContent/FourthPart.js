import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import { pink } from '@mui/material/colors';


const FourthPart = () => {
    return (
        <div style={{ marginTop: "120px" }}>
            <div >
                <div>
                    <Typography variant='h5'>
                        AERIAL PHOTOGRAPHY
                    </Typography>
                    <Typography variant='h3'>
                        We Picture Objects And Spaces
                    </Typography>
                    <Typography variant='caption text'>
                        Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.
                    </Typography>
                    <Container>
                        <Grid className='mt-1' container spacing={20}>
                            <Grid item xs={12} md={4}>
                                <Typography variant='subtitle1' className='my-3'>
                                    AERIAL PHOTOGRAPHY<CameraAltIcon fontSize="large" sx={{ color: pink[500] }} />
                                </Typography>

                                <Typography>
                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas
                                </Typography>

                                <Typography variant='subtitle1' className='my-3'>
                                    RESOLUTION<HighQualityIcon fontSize="large" sx={{ color: pink[500] }} />
                                </Typography>

                                <Typography>
                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <img className='img-fluid animate__animated animate__zoomIn animate__infinite	infinite' src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_02-640x385.png" alt="" style={{ width: "600px", height: "300px" }} />
                            </Grid>
                            <Grid item xs={12} md={4} className='text-start'>
                                <Typography variant='subtitle1' className='my-3'>
                                    RESOLUTION<BatteryCharging60Icon fontSize="large" sx={{ color: pink[500] }} />
                                </Typography>
                                <Typography className='my-3'>
                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas
                                </Typography>
                                <Typography variant='subtitle1' className='my-3'>
                                    AERIAL PHOTOGRAPHY<CameraAltIcon fontSize="large" sx={{ color: pink[500] }} />
                                </Typography>
                                <Typography>
                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas
                                </Typography>

                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default FourthPart;