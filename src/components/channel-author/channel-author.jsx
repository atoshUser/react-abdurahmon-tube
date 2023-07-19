import { CheckCircle } from "@mui/icons-material";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const ChannelAuthor = ({ author }) => {
  console.log(author);
  return (
    <Stack
      direction={"column"}
      p={"15px"}
      sx={{
        position: "relative",
        width: "100%",
        height: "280px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "-25px",
        }}
      >
        <Box
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "100px",
            overflow: "hidden",
            mb: "5px",
          }}
        >
          <CardMedia
            image={author?.snippet.thumbnails.high.url}
            component={"image"}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={"5px"}
          whiteSpace={"nowrap"}
        >
          <Typography variant={"h5"} color={"black"} fontWeight={"bold"}>
            {author?.snippet.title}
          </Typography>
          <CheckCircle fontSize="12px" color="grey" opacity={".6"} />
        </Stack>
        <Typography variant={"subtitle1"} sx={{ opacity: ".6" }}>
          {parseInt(author?.statistics.subscriberCount).toLocaleString()}{" "}
          Subscribers
        </Typography>
      </Box>
    </Stack>
  );
};

export default ChannelAuthor;
