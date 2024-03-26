import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export default function Conversation({ data = [] }) {
  const theme = useTheme();
  return (
    <Stack
      sx={{ backgroundColor: (theme) => theme.palette.primary.contrastText }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, border: "none" }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: (theme) => theme.palette.background.dark,
                opacity: "40",
                border: "none",
                px: 0,
              }}
            >
              <TableCell sx={{ width: "10%", pl: 4 }}>
                <Typography>Conversation</Typography>
              </TableCell>
              <TableCell sx={{ width: "40%" }} align="left"></TableCell>
              <TableCell sx={{ width: "10%" }} align="left">
                <Typography>User</Typography>
              </TableCell>
              <TableCell sx={{ width: "10%" }} align="left">
                <Typography>Org</Typography>
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                <Typography>Last Update</Typography>
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                <Typography>Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ width: "10%", px: 0 }}
                  align="right"
                  component="th"
                  scope="row"
                >
                  <img
                    src={row.img}
                    alt="img"
                    style={{
                      width: theme.spacing(7),
                      height: theme.spacing(7),
                      borderRadius: "50%",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ width: "40%" }} align="left">
                  <Typography variant="h5"> {row.heading} </Typography>
                  <Typography> {row.title} </Typography>
                  <Typography>
                    <u>{row.description}</u>
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="left">
                  {row.user}
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="left">
                  {row.org}
                </TableCell>
                <TableCell sx={{ width: "15%" }} align="left">
                  {row.update}
                </TableCell>
                <TableCell sx={{ width: "15%" }} align="left">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
