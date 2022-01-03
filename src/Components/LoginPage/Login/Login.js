import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { FiLogIn } from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signInWithEmailPassword } = useAuth();
    const [loginData, setLoginData] = useState();

    const location = useLocation();
    const navigate = useNavigate()
    //handle google sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }

    //Handle Email Password Login
    const handleEmailAndPassword = (e) => {
        e.preventDefault();
        signInWithEmailPassword(loginData.email, loginData.password, location, navigate)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h5">
                        Please Log In
                    </Typography>
                    <form onSubmit={handleEmailAndPassword}>
                        <TextField
                            sx={{ width: '100%', mt: 5 }}
                            label="Email"
                            id="outlined-size-small"
                            name='email'
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '100%', my: 5 }}
                            label="Password"
                            id="outlined-size-small"
                            name='password'
                            onBlur={handleOnBlur}
                        />

                        <Button sx={{ width: '50%', py: 1.5 }} type='submit' variant="contained">Log In  <FiLogIn style={{ fontSize: '1.2rem', marginLeft: "3px", fontWeight: "bold" }} /></Button>
                        <Button color='error' sx={{ width: '50%', py: 1.5, ms: 2 }} type='submit' variant="contained">Reset Password </Button>
                    </form>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                        <Typography component="p" sx={{ my: 2 }}>
                            New User? Please Register
                        </Typography>
                    </Link>
                    <Button onClick={handleGoogleSignIn} sx={{ width: '50%', py: 1.5 }} variant="contained"> <FaGoogle style={{ fontSize: '1.2rem', marginRight: "5px" }} /> Continue with Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;