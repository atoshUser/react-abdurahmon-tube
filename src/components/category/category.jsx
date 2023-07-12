import { IconButton, Stack } from "@mui/material";
import React from "react";
import "./category.css";
import { categories, color } from "../constants";

const Category = () => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }} mb={2}>
      {categories.map((btn) => {
        return (
          <button
            style={{
              color: color.secondary,
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: color.primary,
            }}
            key={btn.text}
            className="btn-category"
          >
            <span>{btn.icon}</span>
            <span>{btn.text}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Category;
