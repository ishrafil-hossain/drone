import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [registerData, setRegisterData] = useState();
    const { signInWithGoogle, createNewUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    //handle google sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    //Register New User
    const handleNewUser = e => {
        e.preventDefault();
        createNewUser(registerData.name, registerData.email, registerData.password, navigate);
    };
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="h5">
                            Please Register
                        </Typography>
                        <form onSubmit={handleNewUser}>
                            <TextField
                                sx={{ width: '100%', mt: 5 }}
                                label="Name"
                                id="outlined-size-small"
                                type='text'
                                name='name'
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '100%', mt: 5 }}
                                label="Email"
                                id="outlined-size-small"
                                type='email'
                                name='email'
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '100%', my: 5 }}
                                label="Password"
                                id="outlined-size-small"
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                            />

                            <Button sx={{ width: '50%', py: 1.5 }} type='submit' variant="contained">Register</Button>
                        </form>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <Typography component="p" sx={{ my: 2 }}>
                                Already Have an Account? Please Login
                            </Typography>
                        </Link>
                        <Button onClick={handleGoogleSignIn} sx={{ width: '50%', py: 1.5 }} variant="contained"> <FaGoogle style={{ fontSize: '1.2rem', marginRight: "5px" }} /> Continue with Google</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>
            </Container >
        </>
    );
};

export default SignUp;