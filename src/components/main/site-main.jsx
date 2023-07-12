import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { color } from "../constants";
import { Category } from "../";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <Stack>
      <Category />
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
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
