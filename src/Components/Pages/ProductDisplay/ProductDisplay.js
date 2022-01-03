import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card, Button, CardContent, Grid, Typography, CardMedia } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const ProductDisplay = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { _id, name, img, price } = product;

        return (
            <>
                <Grid item xs={12} md={4} className="p-2">

                    <Card className="bg-dark text-white">
                        <CardMedia
                            component="img"
                            className="img-fluid bg-dark"
                            style={{ width: 400, height: 400 }}
                            image={img}
                            alt="Paella dish"
                        />
                        {/* <img className="img-fluid" src={img} alt="" style={{ width: 400, height: 400 }} /> */}
                        <CardContent style={{
                            height: 140
                        }}>
                            <Typography variant="h6">
                                {name}
                            </Typography>

                        </CardContent>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: 5
                        }}>
                            <Typography variant="h4">
                                <Link to={`/product/${_id}`}> <Button variant="contained">More Details</Button></Link>
                            </Typography>
                            <Typography variant="h5">
                                {<AttachMoneyIcon fontSize="large" />}{price}
                            </Typography>


                            <Typography variant="h4">
                                <Link to={`/booking/${_id}`}> <Button variant="contained">Purchase</Button></Link>
                            </Typography>
                        </div>

                    </Card>
                </Grid>


            </>

        );
    });
    return <>{renderList}</>;
};

export default ProductDisplay;
