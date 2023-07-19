import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  SiteMain,
  About,
  Navbar,
  Search,
  VideoDetail,
  Channel,
  VideoCard,
} from "../index.js";
function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/search/:id" element={<Search />} />
        <Route path="/" element={<SiteMain />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/navbar/:id" element={<Navbar />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video-card/:id" element={<VideoCard />} />
      </Routes>
    </Box>
  );
}
export default App;
