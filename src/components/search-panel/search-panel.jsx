import React from "react";
import { Paper, IconButton } from "@mui/material";
import { color } from "../constants";
import { Search } from "@mui/icons-material";
import "./search-panel.css";
const searchPanel = () => {
  return (
    <Paper
      component={"form"}
      sx={{
        display: "flex",
        alignItems: "center",
        pl: 2,
        border: `1px solid ${color.secondary}`,
        boxShadow: "none",
      }}
    >
      <input className="input" type="text" placeholder="Searching...." />
      <IconButton>
        <Search
          sx={{
            color: color.secondary,
          }}
        />
      </IconButton>
    </Paper>
  );
};

export default searchPanel;
