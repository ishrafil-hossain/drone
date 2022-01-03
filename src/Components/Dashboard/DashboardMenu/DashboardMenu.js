import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, List, ListItem } from '@mui/material';
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { MdBookmarkBorder, MdPayment, MdPostAdd, MdManageAccounts, MdProductionQuantityLimits, MdAdminPanelSettings, MdOutlineLogout } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';


const drawerWidth = 240;


const DashboardMenu = (props) => {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: "#212e49be", height: "100vh" }}>
            <Toolbar>
                <img className='img-fluid' src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/logo-white.png" alt="Logo" />
            </Toolbar>

            <Divider />
            <List>
                <ListItem>
                    <NavLink className="text-decoration-none" to='/'>
                        <FaHome style={{ color: "white", fontSize: "25px" }} />  <Button style={{ textAlign: "center", color: "white" }} color="inherit">Back Home</Button>
                    </NavLink>
                </ListItem>
                {
                    !admin ? <>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`/dashboard/myOrders`}>
                                <MdBookmarkBorder style={{ color: "white", fontSize: "25px" }} />  <Button style={{ textAlign: "center", color: "white" }} color="inherit">My Orders</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`/dashboard/payment`}>
                                <MdPayment style={{ color: "white", fontSize: "25px" }} />   <Button style={{ textAlign: "center", color: "white" }} color="inherit">Payment</Button>
                            </NavLink>
                        </ListItem>
                    </> : <>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`/dashboard/addProduct`}>
                                <MdPostAdd style={{ color: "white", fontSize: "25px" }} />  <Button style={{ textAlign: "center", color: "white" }} color="inherit">Add a Product</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`/dashboard/addBlog`}>
                                <MdPostAdd style={{ color: "white", fontSize: "25px" }} />  <Button style={{ textAlign: "center", color: "white" }} color="inherit">Add a Blog</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`/dashboard/makeAdmin`}>
                                <MdAdminPanelSettings style={{ color: "white", fontSize: "25px" }} />  <Button style={{ textAlign: "center", color: "white" }} color="inherit">Make Admin</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`/dashboard/manageOrders`}>
                                <MdManageAccounts style={{ color: "white", fontSize: "25px" }} />  <Button style={{ textAlign: "center", color: "white" }} color="inherit">Manage All Orders</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`/dashboard/manageProducts`}>
                                <MdProductionQuantityLimits style={{ color: "white", fontSize: "25px" }} />   <Button style={{ textAlign: "center", color: "white" }} color="inherit">Manage Products</Button>
                            </NavLink>
                        </ListItem>
                    </>
                }
                <ListItem>
                    <NavLink className="text-decoration-none" to='/'>
                        <Button style={{ textAlign: "center", color: "white", backgroundColor: "#a72005" }} onClick={logOut} variant="contained">Log Out <MdOutlineLogout style={{ color: "white", fontSize: "20px", marginLeft: "5px" }} /></Button>
                    </NavLink>
                </ListItem>
            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: "#212e49be" }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        WELCOME TO DASHBOARD Mr./Mrs, {user.displayName.toUpperCase()}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

DashboardMenu.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardMenu;