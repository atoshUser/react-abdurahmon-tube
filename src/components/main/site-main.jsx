import { Box, Container, Stack, Typography } from "@mui/material";
import { color } from "../constants";
import { Category } from "../";
import React, { useState, useEffect } from "react";
import ApiServise from "../service/service.api";
import { Videos } from "../index";
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
  }, []);
  const setSelectedCategoryHandler = (category) =>
    setSelectedCategory(category);
  return (
    <Stack>
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategoryHandler={setSelectedCategoryHandler}
      />
      <Box>
        <Container maxWidth={"80%"}>
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
          <Videos dataVideos={dataVideos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
