import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard } from "../index";

const Videos = ({ dataVideos }) => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gridAutoFlow: "dense",
        gridAutoRows: "auto",
      }}
      gap={"20px"}
    >
      {dataVideos.map((item) => {
        return (
          <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <VideoCard video={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
