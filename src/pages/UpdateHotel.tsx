import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PATH } from "../constants/path";

const theme = createTheme();

interface IHotel {
  id: string;
  name: string;
  location: string;
  roomCount: string;
}

export default function UpdateHotel() {
  const [name, setHotelName] = React.useState("");
  const [id, setID] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [roomCount, setRoomCount] = React.useState("");
  const navigate = useNavigate();

  const updateHotel = async (updateDetails: IHotel) => {
    console.log("updateHotel", updateDetails);
    return axios
      .put(
        `http://hilltophotel-env.eba-rsm2pfsn.us-east-1.elasticbeanstalk.com/hill-top-hotel/api/hotel`,
        updateDetails
      )
      .then((response) => {
        navigate("/home");
      });
  };

  React.useEffect(() => {
    setID(localStorage.getItem("ID") ?? "");
    setHotelName(localStorage.getItem("Hotel") ?? "");
    setLocation(localStorage.getItem("Location") ?? "");
    setRoomCount(localStorage.getItem("Room") ?? "");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await updateHotel({
      id,
      name,
      location,
      roomCount,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Update Hotel Page
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              type="text"
              fullWidth
              id="text"
              value={name}
              label="Hotel Name"
              name="text"
              onChange={(e) => setHotelName(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="text"
              value={location}
              label="Location"
              type="text"
              id="text"
              onChange={(e) => setLocation(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="text"
              value={roomCount}
              label="Room count"
              type="number"
              id="text"
              onChange={(e) => setRoomCount(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Update Hotel
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
