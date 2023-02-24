import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../contexts/AuthContext";
const Auth = ({ closeModal }) => {
    const {
        email,
        user,
        password,
        emailError,
        passwordError,
        hasAccount,
        setPassword,
        setEmail,
        setHasAccount,
        handleLogin,
        handleSignup,
    } = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };
    return (
        <Box
            sx={{
                width: "400px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                // height: "70%",
                padding: "30px 30px 50px 30px",
                borderRadius: "10px",
                position: "relative",
            }}
            onSubmit={handleSubmit}
            onClick={(event) => event.stopPropagation()}
        >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography color="black" component="h1" variant="h5">
                войти
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={emailError}
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    helperText={passwordError}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                {hasAccount ? (
                    <Button
                        onClick={() => {
                            handleLogin();
                        }}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        войти
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            handleSignup();
                        }}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        зарегестрироватся
                    </Button>
                )}
                <Grid
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Grid item>
                        {hasAccount ? (
                            <Link
                                className="links"
                                sx={{ color: "white" }}
                                href="#"
                                variant="body2"
                                onClick={() => setHasAccount(!hasAccount)}
                            >
                                {"Don't have an account? Register now"}
                            </Link>
                        ) : (
                            <Link
                                className="links"
                                sx={{ color: "white" }}
                                href="#"
                                variant="body2"
                                onClick={() => setHasAccount(!hasAccount)}
                            >
                                {"Already have an account? Log In"}
                            </Link>
                        )}
                    </Grid>
                </Grid>
            </Box>
            <Button
                sx={{
                    position: "absolute",
                    top: "30px",
                    right: "10px",
                    color: "black",
                }}
                onClick={closeModal}
            >
                <CloseIcon fontSize="large" />
            </Button>
        </Box>
    );
};

export default Auth;
