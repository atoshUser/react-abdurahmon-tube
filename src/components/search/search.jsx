import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "../index";
import ApiService from "../service/service.api";
import { color } from "../constants";
import { Box, Container, Stack, Typography } from "@mui/material";
const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    ApiService.getData(`search?part=snippet&q=${id}`)
      .then((response) => setVideos(response.items))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Stack>
      <Container maxWidth="90%">
        <Box>
          <Typography
            variant={"h4"}
            fontWeight={"bold"}
            sx={{
              display: "flex",
              gap: "15px",
              marginBottom: "15px",
            }}
          >
            Search result <span style={{ color: color.secondary }}>{id}</span>
          </Typography>
          <Videos dataVideos={videos} />
        </Box>
      </Container>
    </Stack>
  );
};

export default Search;
