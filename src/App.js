import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';

import DashboardMenu from './Components/Dashboard/DashboardMenu/DashboardMenu';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import DashboardOutlet from './Components/Dashboard/DashboardOutlet/DashboardOutlet';
import PrivateRoute from './Components/LoginPage/PrivateRoute/PrivateRoute';
import AdminRoute from './Components/LoginPage/AdminRoute/AdminRoute';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import Payment from './Components/Dashboard/Payment/Payment';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import AddBlog from './Components/Dashboard/AddBlog/AddBlog';
import ManageOrders from './Components/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './Components/Dashboard/ManageProducts/ManageProducts';
import Login from './Components/LoginPage/Login/Login';
import SignUp from './Components/LoginPage/SignUp/SignUp';

import ProductsDetails from './Components/Pages/ProductDetails/ProductDetails'
import Footer from './Components/Pages/Footer/Footer';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/dashboard" element={<PrivateRoute><DashboardMenu /></PrivateRoute>}>
            <Route path="/dashboard" element={<DashboardOutlet></DashboardOutlet>}></Route>
            <Route path={`/dashboard/myOrders`} element={<MyOrders />}> </Route>
            <Route path={`/dashboard/payment`} element={<Payment></Payment>}></Route>
            <Route path={`/dashboard/addProduct`} element={<AddProduct />}></Route>
            <Route path={`/dashboard/addBlog`} element={<AdminRoute><AddBlog /></AdminRoute>}></Route>
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}> </Route>
            <Route path={`/dashboard/manageOrders`} element={<AdminRoute><ManageOrders></ManageOrders></AdminRoute>}></Route>
            <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/product/:productId" element={<ProductsDetails />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes >
      </Router >
    </AuthProvider >
  );
}

export default App;
