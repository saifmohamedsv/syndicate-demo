import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Navbar Outlet={Outlet} />
    </Box>
  );
};

export default Home;
