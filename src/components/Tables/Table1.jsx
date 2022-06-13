import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function createData(name, date, section, type) {
  return { name, date, section, type };
}

const rows = [createData("سيف محمد", "6/13/2022", "جديده", "نوعها")];

export default function BasicTable() {
  return (
    <TableContainer component={Box}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">نوع الشهاده</TableCell>
            <TableCell align="right">قسم الشهاده</TableCell>
            <TableCell align="right">التاريخ</TableCell>
            <TableCell align="right">المالك</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
