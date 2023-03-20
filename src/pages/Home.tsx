import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import {Box, Container} from "@mui/material";
import CustomizedInputBase from "../components/Search";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";

interface ITabledata {
    id: string;
    name: string;
    location: string;
    roomCount: any;
}

export default function Home() {
    const [hoteldata, setHoteldata] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState("ALL");
    const navigate = useNavigate();
    React.useEffect(() => {
        axios
            .get(
                `http://hilltophotel-env.eba-rsm2pfsn.us-east-1.elasticbeanstalk.com/hill-top-hotel/api/hotel/search/${searchQuery}`
            )
            .then((response) => {
                setHoteldata(response.data.data.hotelList);
            });
    }, [searchQuery]);

    const setData = (data: ITabledata) => {
        let {id, name, location, roomCount} = data;
        localStorage.setItem("ID", id);
        localStorage.setItem("Hotel", name);
        localStorage.setItem("Location", location);
        localStorage.setItem("Room", roomCount);
    };
    return (
        <>
            <Container component={Paper}>
                <Box mt={15}>
                    <h1>Hotels</h1>
                    <CustomizedInputBase onSearch={(value) => setSearchQuery(value)}/>
                    <Box mt={1}>
                        <Button variant="contained" onClick={() => navigate("/add")}>
                            Add Hotel
                        </Button>
                    </Box>
                </Box>

                <Table sx={{maxWidth: 1500, marginTop: "30px"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{fontWeight: 1000}}>
                                Hotel Name
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 1000}}>
                                Location{" "}
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 1000}}>
                                Room Count
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 1000}}>
                                Add rooms
                            </TableCell>
                            <TableCell align="right" sx={{fontWeight: 1000}}>
                                update
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hoteldata?.map((row: ITabledata) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="right">{row.location}</TableCell>
                                <TableCell align="right">{row.roomCount}</TableCell>
                                <TableCell align="right">
                                    <Button>Add</Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Link to="/update" style={{textDecoration: "none"}}>
                                        <Button onClick={() => setData(row)} variant="contained">
                                            Update
                                        </Button>
                                    </Link>
                                </TableCell>

                                {/* <TableCell align="right">
                  <Button variant="contained">Update</Button>
                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );
}
