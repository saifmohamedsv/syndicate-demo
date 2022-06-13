import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar Outlet={Outlet} />
    </Box>
  );
};

export default Home;
