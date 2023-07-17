import { Paper, IconButton } from "@mui/material";
import { color } from "../constants";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import "./search-panel.css";
import { useNavigate } from "react-router-dom";

const SearchPanel = () => {
  const [val, setVal] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (val) {
      navigate(`/search/${val}`);
    }
    setVal("");
  };
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        display: "flex",
        alignItems: "center",
        pl: 2,
        border: `1px solid ${color.secondary}`,
        boxShadow: "none",
      }}
    >
      <input
        className="input"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        placeholder="Searching...."
      />
      <IconButton type={"submit"}>
        <Search
          sx={{
            color: color.secondary,
          }}
        />
      </IconButton>
    </Paper>
  );
};

export default SearchPanel;
