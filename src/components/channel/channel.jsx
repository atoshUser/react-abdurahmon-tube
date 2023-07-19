import React, { useState, useEffect } from "react";
import { ChannelAuthor, Videos } from "../";
import { useParams } from "react-router-dom";
import ApiService from "../service/service.api";
import { Box, Container, Stack } from "@mui/material";
const Channel = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail);
  useEffect(() => {
    ApiService.getData(`channels?part=snippet&id=${id}`)
      .then((response) => setChannelDetail(response.items[0]))
      .catch((error) => console.log(error));
    ApiService.getData(`search?channelId=${id}&part=snippet`)
      .then((response) => setChannelVideos(response.items))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <Box minHeight={"95vh"} mt={"10vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          sx={{
            backgroundImage: `url(
              ${channelDetail?.brandingSettings.image.bannerExternalUrl}
            ) `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <ChannelAuthor author={channelDetail} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos dataVideos={channelVideos} />
      </Container>
    </Box>
  );
};

export default Channel;
