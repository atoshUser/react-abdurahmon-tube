import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../service/service.api";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import "./video-details.css";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import { Videos } from "../index";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Visibility,
} from "@mui/icons-material";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    ApiService.getData(`videos?part=snippet,statistics&id=${id}`)
      .then((response) => setVideoDetail(response.items[0]))
      .catch((err) => console.log(err));
    ApiService.getData(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((response) => setRelatedVideo(response.items));
    console.log(relatedVideo);
  }, [id]);
  console.log(videoDetail);
  return (
    <Stack height={"85vh"} direction={{ md: "column", lg: "row" }} gap={"15px"}>
      <Box
        width={{ md: "100%", lg: "85%" }}
        overflow={"scroll"}
        height={"100vh"}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          height={"60vh"}
          width={"100%"}
        />
        <Box sx={{ ml: "10px", p: "15px" }}>
          {videoDetail?.snippet.tags.map((item, idx) => {
            return (
              <Chip
                label={item}
                key={idx}
                sx={{ marginTop: "10px", cursor: "pointer", mb: "15px" }}
                icon={<TagOutlinedIcon />}
                variant="outlined"
              />
            );
          })}
          <Typography variant={"h5"} fontWeight={"bold"}>
            {videoDetail?.snippet.title}
          </Typography>
          <Typography variant={"subtitle2"} sx={{ opacity: ".7", mb: "15px" }}>
            {videoDetail?.snippet.description.slice(0, 250)}
          </Typography>
          <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
            <Stack
              direction={"row"}
              sx={{ opacity: ".7", alignItems: "center", gap: "3px" }}
            >
              <Visibility />
              {parseInt(
                videoDetail?.statistics.viewCount
              ).toLocaleString()}{" "}
              views
            </Stack>
            <Stack
              direction={"row"}
              sx={{ alignItems: "center", opacity: ".7", gap: "3px" }}
            >
              <FavoriteOutlined />
              {parseInt(videoDetail?.statistics.likeCount).toLocaleString()}
            </Stack>
            <Stack
              direction={"row"}
              sx={{ opacity: ".7", gap: "3px", alignItems: "center" }}
            >
              <MarkChatRead />
              {parseInt(videoDetail?.statistics.commentCount).toLocaleString()}
              comment
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Avatar
              alt={videoDetail?.snippet.channelTitle}
              src={videoDetail?.snippet.thumbnails.default.url}
            />
            <Typography
              variant={"subtitle2"}
              color={"grey"}
              sx={{ ml: "15px" }}
            >
              {videoDetail?.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box
        width={{ md: "100%" }}
        height={"100vh"}
        flexDirection={{ sm: "column" }}
        sx={{ overflowY: "scroll" }}
      >
        <Videos dataVideos={relatedVideo} />
      </Box>
    </Stack>
  );
};

export default VideoDetail;
