import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {PATH} from "../constants/path";

const theme = createTheme();

interface ILogin {
    mobileNo: string;
    password: string;
    userType: string;
}

export default function SignIn() {
    const [mobileNo, setPhoneNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userType, setRole] = React.useState("USER");
    const navigate = useNavigate();

    // login for user
    const loginUser = async (credentials: ILogin) => {
        console.log("loginUser", credentials);
        return axios
            .post(`${PATH.loginUrl}`, credentials)
            .then((response) => {
                console.log(response.data.data.userType);
                navigate("/home");
            })
            .catch((e) => alert("Please enter the credentials correctly"));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await loginUser({
            mobileNo,
            password,
            userType,
        });
    };

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            type="number"
                            fullWidth
                            id="number"
                            label="Mobile number"
                            name="number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            autoFocus
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Role"
                                value={userType}
                                onChange={handleChange}
                            >
                                <MenuItem value={"USER"}>USER</MenuItem>
                                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
