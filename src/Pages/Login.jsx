import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AuthUser } from '../redux/slice/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loginStatus } = useSelector((state) => state?.user);
    const [ loginCredentials, setLoginCredentials ]  = useState ({
        username: '',
        password: '',
    })  
    const handleLoginData = (event) => {
        setLoginCredentials({ ...loginCredentials, [event.target.name]: event.target.value });
        console.log(loginCredentials);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginCredentials);
        dispatch(AuthUser(loginCredentials));
    };
    useEffect(() => {
        if (loginStatus) {
          navigate('/')
        }
    }, [navigate, loginStatus])

    return (
        <Container component="main" maxWidth="sm">
        <Box
            sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                onChange={(e) => handleLoginData(e)}
                autoComplete="username"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => handleLoginData(e)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
            </Box>
        </Box>
        </Container>
    );
}