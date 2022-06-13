import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#126821",
      white: "#fff",
      dark: "#0B0E16",
    },
    secondary: {
      blue: "rgba(67,105,253,0.2)",
      main: "#2a2a2a",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Inter, sans-serif"].join(","),
  },
});
