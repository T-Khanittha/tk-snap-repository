import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#212121",
      disabled: "rgba(255, 255, 255, 0.5)",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

export default darkTheme;
