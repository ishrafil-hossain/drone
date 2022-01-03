import React, { useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import swal from 'sweetalert';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    // Handle Product submit
    const handleProductSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('description', description);
        formData.append('image', image);


        fetch('http://localhost:5000/products', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                swal("Good job!", "Your product added successfully done!", "success");
            })
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <form onSubmit={handleProductSubmit}>
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Product Name"
                            id="outlined-size-small"
                            type='text'
                            name='name'
                            onBlur={e => setName(e.target.value)}
                            required
                            size="small"
                        /> <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Product Category"
                            id="outlined-size-small"
                            type='text'
                            name='category'
                            onBlur={e => setCategory(e.target.value)}
                            required
                            size="small"
                        /> <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Product Price"
                            id="outlined-size-small"
                            type='text'
                            name='price'
                            onBlur={e => setPrice(e.target.value)}
                            required
                            size="small"
                        /> <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Product Stock"
                            id="outlined-size-small"
                            type='text'
                            name='stock'
                            onBlur={e => setStock(e.target.value)}
                            required
                            size="small"
                        /> <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            label="Product Description"
                            id="outlined-size-small"
                            type='text'
                            name='description'
                            onBlur={e => setDescription(e.target.value)}
                            required
                            size="small"
                        />
                        <br />
                        <TextField
                            sx={{ width: "50%", my: 1 }}
                            id="outlined-size-small"
                            type='file'
                            name='image'
                            accept='image/*'
                            onBlur={e => setImage(e.target.files[0])}
                            required
                            size="small"
                        />
                        <br />
                        <Button sx={{ width: '50%', py: 1.5 }} type='submit' variant="contained">Add Product</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddProduct;