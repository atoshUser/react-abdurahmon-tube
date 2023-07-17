import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { SiteMain, About, Navbar, Search, VideoDetail } from "../index.js";
function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/search/:id" element={<Search />} />
        <Route path="/" element={<SiteMain />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/navbar/:id" element={<Navbar />} />
        <Route path="/video/:id" element={<VideoDetail/>} />
      </Routes>
    </Box>
  );
}
export default App;
