import { IconButton, Stack } from "@mui/material";
import React from "react";
import "./category.css";
import { categories, color } from "../constants";

const Category = ({ setSelectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }} mb={2}>
      {categories.map((btn) => {
        return (
          <button
            style={{
              color: `${
                btn.text === selectedCategory ? "white" : color.secondary
              }`,
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: `${
                btn.text === selectedCategory ? color.secondary : color.primary
              } `,
            }}
            key={btn.text}
            className="btn-category"
            onClick={() => setSelectedCategoryHandler(btn.text)}
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
