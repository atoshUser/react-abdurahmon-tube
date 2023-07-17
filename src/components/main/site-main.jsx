import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { color } from "../constants";
import { Category } from "../";
import React, { useState, useEffect } from "react";
import ApiServise from "../service/service.api";
import { Videos } from "../index";
import "./site-main.css";
const Main = () => {
  const [dataVideos, setDataVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");

 
  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const response = await ApiServise.getData("search");
    //     setDataVideos(response.items);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
    ApiServise.getData(`search?part=snippet&q=${selectedCategory}`).then(
      (response) => setDataVideos(response.items)
    );
  }, [selectedCategory]);
  const setSelectedCategoryHandler = (category) =>
    setSelectedCategory(category);
  return (
    <Stack>
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategoryHandler={setSelectedCategoryHandler}
      />
      <Container maxWidth="90%">
        <Box>
          <Typography
            variant={"h4"}
            fontWeight={"bold"}
            sx={{
              display: "flex",
              gap: "15px",
            }}
          >
            {selectedCategory}
            <span style={{ color: color.secondary }}>Videos</span>
          </Typography>
          {!dataVideos.length ? (
            <CircularProgress className="loader" />
          ) : (
            <Videos dataVideos={dataVideos} />
          )}
        </Box>
      </Container>
    </Stack>
  );
};

export default Main;
