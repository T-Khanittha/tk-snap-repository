import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
