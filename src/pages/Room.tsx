import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface ITabledata {
  id: string;
  name: string;
  location: string;
  roomCount: number;
}
export default function Room() {
  const [hoteldata, setHoteldata] = React.useState([]);
  const navigate = useNavigate();
  return (
    <>
      <Container component={Paper}>
        <Box mt={15}>
          <h1>Hotels</h1>
          {/* <CustomizedInputBase onSearch={(value) => setSearchQuery(value)} /> */}
          <Box mt={1}>
            <Button variant="contained" onClick={() => navigate("/add")}>
              Add Hotel
            </Button>
          </Box>
        </Box>

        <Table sx={{ maxWidth: 1500, marginTop: "30px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 1000 }}>
                Hotel Name
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 1000 }}>
                Location{" "}
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 1000 }}>
                Room Count
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 1000 }}>
                Add rooms
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 1000 }}>
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
                {/* <Link to="/add-room" > */}
                <TableCell align="right">
                  <Button>Add</Button>
                </TableCell>

                <TableCell align="right">
                  <Button variant="contained">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}
