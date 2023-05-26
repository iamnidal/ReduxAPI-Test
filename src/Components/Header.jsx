import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { handleLogoutState } from '../redux/slice/authSlice'

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loginStatus } = useSelector((state) => state?.user);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLogout = () => {
        dispatch(handleLogoutState());
    };


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect (() => {
        if(!loginStatus)
        {
            navigate("/login");
        }
    }, [loginStatus, navigate]);

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Box marginLeft={ { marginLeft: "auto" , marginRight : -12}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={ handleLogout}>Logout</MenuItem>
                </Menu>
                </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
}