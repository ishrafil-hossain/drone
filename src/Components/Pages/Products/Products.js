import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Container, Grid } from "@mui/material";
import { setProducts } from "../../../redux/actions/Action";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const Products = () => {
    // const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://morning-brook-76931.herokuapp.com/products")
            .catch((err) => {
            });
        dispatch(setProducts(response.data.slice(0, 6)));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <Container className="mt-5">
                <h1 className="m-5">Products</h1>
                <Grid container spacing={4}>
                    {/* <h1>Total{products.length}</h1> */}
                    <ProductDisplay />
                </Grid>
            </Container>
        </>
    );
};

export default Products;
