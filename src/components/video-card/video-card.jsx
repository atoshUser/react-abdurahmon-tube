import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { color } from "../constants";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ApiService from "../service/service.api";
function VideoCard({ video }) {
  return (
    <Card sx={{ border: "none", boxShadow: "none" }}>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          component={"image"}
          sx={{ width: "100%", height: "180px" }}
          image={video.snippet.thumbnails.high.url}
        />
      </Link>
      <CardContent
        sx={{
          background: color.primary,
          position: "relative",
          height: "230px",
        }}
      >
        <Typography sx={{ opacity: ".5" }}>
          {moment(video.snippet.publishedAt).fromNow()}
        </Typography>
        <Link to={`/video/${video.id.videoId}`}>
          <Typography variant={"subtitle1"} sx={{ fontWeight: "bold" }}>
            {video.snippet.title.slice(0, 80)}
          </Typography>
        </Link>
        <Typography variant={"subtitle2"} sx={{ opacity: ".6" }}>
          {video.snippet.description.slice(0, 100)}
        </Typography>

        <Link to={`/channel/${video.snippet.channelId}`}>
          <Stack
            direction={"row"}
            sx={{ bottom: "10px", alignItems: "center" }}
            gap="7px"
            position={"absolute"}
            bottom={"10px"}
          >
            <Avatar src={video.snippet.thumbnails.high.url} />
            <Typography variant={"subtitle2"} color={"grey"}>
              {video.snippet.channelTitle}
            </Typography>
            <CheckCircle sx={{ fontSize: "12px", color: "grey" }} />
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}
export default VideoCard;
