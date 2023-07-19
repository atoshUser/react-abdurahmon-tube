import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Paper, Typography } from "@mui/material";
import { logo, color } from "../constants/index";
import { SearchPanel } from "../index";
import "./navbar.css";
import logoSite from "../../images/site-logo-img-2.svg";
const Navbar = () => {
  return (
    <Stack
      direction={{ md: "row" }}
      p={"15px"}
      height={{ sm: "20vh", md: "15vh" }}
      alignItems={"center"}
      sx={{
        position: "sticky",
        zIndex: 999,
        top: 0,
        backgroundColor: color.primary,
        whiteSpace: "nowrap",
        marginBottom: { sm: "15px" },
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
          <Typography
            variant={"h2"}
            className="logo-text"
            fontSize={{ xs: "20px", md: "35px" }}
          >
            Abdurahmon-tube
          </Typography>
        </Box>
      </Link>
      <SearchPanel />

      <Box />
    </Stack>
  );
};

export default Navbar;
