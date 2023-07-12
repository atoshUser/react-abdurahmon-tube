import { Button, Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Main, About, Navbar } from "../index";
function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Box>
  );
}
export default App;