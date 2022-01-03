import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    //get Input value
    const handleOnBlur = e => {
        const value = e.target.value;
        setEmail(value);
    }
    //handle admin submit
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("Good job!", "Admin Make Successfully Done!", "success");
                }
            })

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" component="div">
                        Make A Admin
                    </Typography>
                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Enter Email"
                            id="outlined-size-small"
                            type='email'
                            name='email'
                            onBlur={handleOnBlur}
                            required
                            size="small"
                        /> <br />
                        <Button variant='contained' type="submit">Make Admin</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>


    );
};

export default MakeAdmin;