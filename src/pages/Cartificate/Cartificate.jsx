import React from "react";
import BasicTable from "../../components/Tables/Table1";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
export default function Cartificate() {
  const { id } = useParams();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Typography variant="h3" dir="rtl">
       {id}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: 2,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" dir="rtl">
          عرض البيانات في {id}
        </Typography>
        <BasicTable />
      </Box>
    </Box>
  );
}
