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
function VideoCard({ video }) {
  console.log(video);
  return (
    <Card
      sx={{
        width: "280px",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardMedia
        component="image"
        image={video.snippet.thumbnails.high.url}
        sx={{ width: "300px", height: "180px" }}
      />
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
        <Typography variant={"subtitle1"} sx={{ fontWeight: "bold" }}>
          {video.snippet.title.slice(0, 70)}
        </Typography>
        <Typography variant={"subtitle2"} sx={{ opacity: ".6" }}>
          {video.snippet.description.slice(0.5)}
        </Typography>
        <Stack
          direction={"row"}
          position={"absolute"}
          sx={{ bottom: "10px", alignItems: "center" }}
          gap="7px"
        >
          <Avatar src={video.snippet.thumbnails.high.url} />
          <Typography variant={"subtitle2"} color={"grey"}>
            {video.snippet.channelTitle}
          </Typography>
          <CheckCircle sx={{ fontSize: "12px", color: "grey" }} />
        </Stack>
      </CardContent>
    </Card>
  );
}
export default VideoCard;
