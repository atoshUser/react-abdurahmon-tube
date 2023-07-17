import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Paper } from "@mui/material";
import { logo, color } from "../constants/index";
import { SearchPanel } from "../index";
import "./navbar.css";
import logoSite from "../../images/site-logo-img-2.svg";
const Navbar = () => {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      p={"15px"}
      height={{ sm: "20vh", md: "15vh" }}
      alignItems={"center"}
      sx={{
        position: "sticky",
        zIndex: 999,
        top: 0,
        backgroundColor: color.primary,
        whiteSpace: "nowrap",
      }}
      justifyContent={"space-between"}
    >
      <Link to={"/"}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={logoSite}
            alt="site-logo-img"
            width={logo.width}
            height={logo.height}
          />
          <span className="logo-text">Abdurahmon-tube</span>
        </Box>
      </Link>
      <SearchPanel />
      <Box />
    </Stack>
  );
};

export default Navbar;
