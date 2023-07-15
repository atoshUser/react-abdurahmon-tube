import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard } from "../index";

const Videos = ({ dataVideos }) => {
  console.log(dataVideos);
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={"15px"}
      maxWidth={"100%"}
    >
      {dataVideos.map((item) => {
        return (
          <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
